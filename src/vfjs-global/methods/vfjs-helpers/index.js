import { set } from 'lodash';
import { sha256 } from 'js-sha256';
import vfjsComponentMixin from '../../../vfjs-component';

const vfjsHelpers = {
  vfjsHelperCreateField(vfjsFieldUiSchema) {
    const {
      id: vfjsFieldId,
      uuid: vfjsFieldUuid,
      required: vfjsFieldRequired,
      children = [],
      component,
      model: vfjsFieldModelKey = '',
      fieldOptions: vfjsFieldOptions = {},
    } = vfjsFieldUiSchema;

    const isArray = this.vfjsHelperFieldIsArray(vfjsFieldModelKey);

    const fieldChildren = isArray
      ? children.reduce((flattenedChildren, child) => ([
        ...flattenedChildren,
        ...child.map(this.vfjsHelperCreateField),
      ]), [])
      : children.map(this.vfjsHelperCreateField);

    const vfjsFieldSchema = this.getVfjsFieldSchema(vfjsFieldModelKey) || {};
    const vfjsFieldState = this.getVfjsFieldState(vfjsFieldModelKey) || {};
    const vfjsFieldModel = this.getVfjsFieldModel(vfjsFieldModelKey);
    const vfjsState = this.getVfjsState();
    const vfjsModel = this.getVfjsModel();

    const props = {
      ...vfjsFieldOptions,
      children,
      id: vfjsFieldId,
      model: vfjsFieldModel,
      modelKey: vfjsFieldModelKey,
      required: vfjsFieldRequired,
      schema: vfjsFieldSchema,
      state: vfjsFieldState,
      uiSchema: vfjsFieldUiSchema,
      value: vfjsFieldModel,
      vfjsBus: this.vfjsBus,
      vfjsFieldId,
      vfjsFieldModel,
      vfjsFieldModelKey,
      vfjsFieldOptions,
      vfjsFieldRequired,
      vfjsFieldSchema,
      vfjsFieldState,
      vfjsFieldUiSchema,
      vfjsModel,
      vfjsState,
    };

    // const fieldComponent = this.vfjsHelperCreateComponent({
    //   component,
    //   children: fieldChildren,
    //   props,
    // });

    // FIXME: Fix the vfjsHelperCreateComponent to enable wrapping of components without the mixin

    const fieldComponent = (typeof component === 'string' && component in this.vfjsComponents)
      ? this.vfjsComponents[component]
      : component;

    return {
      component: fieldComponent,
      children: fieldChildren,
      props,
    };
  },
  vfjsHelperCreateComponents(fields) {
    return fields.map(this.vfjsHelperCreateComponent).filter(field => field);
  },
  vfjsHelperCreateComponent({
    component,
    children,
    props,
    noWrapper = false,
  }) {
    // FIXME: Global compoents will be wrapped regardless of if they need it or not

    if (typeof component === 'string' && component in this.vfjsComponents) {
      return this.vfjsHelperCreateComponent({
        component: this.vfjsComponents[component],
        children: this.vfjsHelperCreateComponents(children),
        props,
        noWrapper: true,
      });
    }

    if (props.id && props.id in this.vfjsComponentsCreated) {
      return this.vfjsComponentsCreated[props.id];
    }

    const vfjsComponent = (noWrapper)
      ? this.$createElement(component, {
        ...{ props },
      }, this.vfjsHelperCreateComponents(children))
      : this.$createElement({
        name: `vue-form-json-schema-field-wrapper-${props.id}`,
        mixins: [vfjsComponentMixin],
        render() {
          return this.$createElement(component, {
            ...this.vfjsAttributes,
          }, this.$slots.default);
        },
      }, {
        ...{ props },
      }, this.vfjsHelperCreateComponents(children));

    if (props.id && !(props.id in this.vfjsComponentsCreated)) {
      this.vfjsComponentsCreated[props.id] = vfjsComponent;
    }

    return vfjsComponent;
  },
  vfjsHelperApplyFieldModel(key, value) {
    const newVfjsModel = Object.assign({}, this.getVfjsModel());
    set(newVfjsModel, key, value);
    return newVfjsModel;
  },
  // The level param helps us to differentiate further between fields.
  // As the same field configuration may be present throughout the ui schema
  // and thus have the same hash.
  //
  // We mediate this by providing the depth level as a second param
  // which will make the hash unique for every field
  vfjsHelpersGenerateFieldUuid(field, level = 0) {
    if (!field) {
      return false;
    }

    const { children = [], ...fieldWithoutChildren } = field;
    const id = sha256(JSON.stringify({ fieldWithoutChildren, level }));

    return {
      ...field,
      id,
      uuid: id,
      children: children.map((child, i) =>
        this.vfjsHelpersGenerateFieldUuid(child, (i + 1) * (level + 1))),
    };
  },
  vfjsHelperChildArrayMapper({ model, children = [], ...child }, parentModel, index) {
    return {
      ...child,
      model: this.vfjsHelperGetChildArrayModelAtIndex(model, parentModel, index),
      children: this.vfjsHelperChildArrayReducerMapper(parentModel, children, index),
    };
  },
  vfjsHelperChildArrayReducerMapper(model, children = [], index) {
    return children.reduce((allChildren, child) => ([
      ...allChildren,
      this.vfjsHelperChildArrayMapper(child, model, index),
    ]), []);
  },
  vfjsHelperGetChildArrayModelAtIndex(model, parentModel, index) {
    const relativeModel = this.vfjsHelperGetRelativeModel(model, parentModel);
    return relativeModel ? `${parentModel}.${index}.${relativeModel}` : model;
  },
  vfjsHelperGetRelativeModel(model, parentModel) {
    return model ? String(model).substr(parentModel.length + 1) : model;
  },
  vfjsHelperGetParentModel(model) {
    const parentIndex = String(model).lastIndexOf('.');
    return String(model).substr(0, parentIndex);
  },
  vfjsHelperSchemaHasRequiredField(schema, fieldKey) {
    return (schema && schema.required && Array.isArray(schema.required))
      ? schema.required.indexOf(fieldKey) !== -1
      : false;
  },
  vfjsHelperFieldIsRequired(model) {
    if (model) {
      const parentModel = this.vfjsHelperGetParentModel(model);
      if (parentModel) {
        const relativeModel = this.vfjsHelperGetRelativeModel(model, parentModel);
        const parentSchema = this.getVfjsFieldSchema(model);
        return this.vfjsHelperSchemaHasRequiredField(parentSchema, relativeModel);
      }

      const vfjsSchema = this.getVfjsSchema();
      return this.vfjsHelperSchemaHasRequiredField(vfjsSchema, model);
    }

    return false;
  },
  vfjsHelperFieldIsArray(key) {
    if (!key) {
      return false;
    }

    const schema = this.getVfjsFieldSchema(key);
    return schema ? schema.type === 'array' : false;
  },
  vfjsHelperIsNumber(n) {
    return !Number.isNaN(parseFloat(n)) && Number.isFinite(parseFloat(n));
  },
};

export default vfjsHelpers;
