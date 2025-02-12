/** getVfjsPropertiesRequired
  @function
  @description Get all errors of type required
  @param [errors] array
  @return
    An array of the properties in the errors array
    were the error property 'keyword' was 'required'.
*/
function getVfjsPropertiesRequired(errors) {
  if (!errors) {
    return [];
  }

  return errors.reduce((required, error) => {
    if (error.keyword === 'required') {
      if (error.params && error.params.missingProperty) {
        const key = error.params.missingProperty;

        const errorDataPathPrefix = String(error.dataPath).substring(0, 1);
        let parent;

        switch (errorDataPathPrefix) {
          // JSONpath dot notation
          case '.':
            parent = error.dataPath.substring(1);
            break;

          // JSONpath bracket notation
          case '[':
            parent = error.dataPath
              .substring(2, error.dataPath.length - 2)
              .replace("']['", '.');
            break;

          // JSONpointer notation with forward slashes
          case '/':
            parent = error.dataPath.substring(1).replace(/\//g, '.');
            break;
        }

        const propertyPath = parent ? `${parent}.${key}` : key;

        if (required.indexOf(propertyPath) === -1) {
          required.push(propertyPath);
        }
      }
    }

    return required;
  }, []);
}

export default getVfjsPropertiesRequired;
