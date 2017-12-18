import { set } from 'lodash';
import vfjsComponentMixin from '../../../vfjs-component';

const vfjsHelpers = {
  vfjsHelperCreateField(vfjsFieldUiSchema) {
    const {
      id: vfjsFieldId,
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

    return this.vfjsHelperCreateComponent({
      component,
      children: fieldChildren,
      props,
    });
  },
  vfjsHelperHashString(string, binary = 62) {
    let integer = 0;

    for (let i = 0; i < string.length; i++) {
      const char = string.charCodeAt(i);
      // hash = (char + (hash << 6) + (hash << 16)) - hash; // eslint-disable-line no-bitwise
      integer = (integer * 33) ^ char; // eslint-disable-line no-bitwise
    }

    // Convert int to unsigned to return a positive number
    integer >>>= 0; // eslint-disable-line no-bitwise

    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const array = [];

    // Create an alphanumeric hash of unsigned int
    while (integer >= binary) {
      const char = integer % binary;
      array.push(chars[char]);
      integer = Math.floor(integer / binary);
    }

    return array.join('');
  },
  vfjsHelperCreateComponent({
    component,
    children,
    props,
  }) {
    // Return early if we have a rendered version in the cache
    if (props.id && props.id in this.vfjsVnodes) {
      return this.vfjsVnodes[props.id];
    }

    // If the component is a local component
    // we don't want an additional wrapper around that

    // FIXME: If the component is globally registered we will unnecessarily wrap it!
    const noWrapper = (
      (typeof component === 'string' && component in this.vfjsComponents)
    );

    // Create the component VNODE directly if noWrapper is true
    //
    // Otherwise wrap the component inside a component which
    // has access to the vfjsComponentMixin
    const vfjsComponent = (noWrapper)
      ? this.$createElement(component, {
        props,
      }, children)
      : this.$createElement({
        name: `vue-form-json-schema-field-wrapper-${props.id}`,
        mixins: [vfjsComponentMixin],
        render() {
          return this.$createElement(component, {
            ...this.vfjsAttributes,
          }, this.$slots.default);
        },
      }, {
        props,
      }, children);

    // Save the VNODE to an vfjsVnodes using the field's ID as the key
    // so it can be re-used next time a render occurs and the field hasn't been updated
    if (props.id && !(props.id in this.vfjsVnodes)) {
      this.vfjsVnodes[props.id] = vfjsComponent;
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
  vfjsHelperGenerateField(field, level = 0) {
    if (!field) {
      return false;
    }

    const { children = [], ...fieldWithoutChildren } = field;
    const objString = JSON.stringify({ fieldWithoutChildren, level });
    const id = this.vfjsHelperHashString(objString);

    return {
      ...field,
      id,
      children: children.map((child, i) =>
        this.vfjsHelperGenerateField(child, (i + 1) * (level + 1))),
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
    return schema ? Array.isArray(schema.items) : false;
  },
};

export default vfjsHelpers;
