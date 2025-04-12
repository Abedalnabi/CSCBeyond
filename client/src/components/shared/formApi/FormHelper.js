function updateValue(stateName, newValue, formStates) {
  const fields = formStates.fields;

  const updatedFields = fields.map((fieldEle) => {
    if (stateName === fieldEle.name) fieldEle.value = newValue;
    return fieldEle;
  });
  return { ...formStates, fields: updatedFields };
}

function getAllFormValues(formStates) {
  const fields = formStates.fields;

  const fieldsResult = {};
  for (let fieldElement of fields) {
    fieldsResult[fieldElement.name] = fieldElement.value;
  }

  alert(JSON.stringify(fieldsResult));
}

function restForm(formStates) {
  const fields = formStates.fields;

  const restFields = fields.map((fieldEle) => {
    if (fieldEle.value) fieldEle.value = '';
    return fieldEle;
  });
  return { ...formStates, fields: restFields };
}

function updateDate(stateName, newValue, formStates) {
  const fields = formStates.fields;

  const updatedFields = fields.map((fieldEle) => {
    if (stateName === fieldEle.name) fieldEle.value = newValue;
    return fieldEle;
  });
  return { ...formStates, fields: updatedFields };
}

function getInputValue(stateName, formStates) {
  const fields = formStates.fields;
  let value = '';
  fields.forEach((ele) => {
    if (ele.name === stateName) value = ele.value;
  });
  return value;
}

export { updateValue, getAllFormValues, restForm, updateDate, getInputValue };
