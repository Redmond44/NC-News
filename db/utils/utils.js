exports.formatDates = list => {
  let arrCopy = [...list]
  return arrCopy.map(listA => {
    let objCopy = { ...listA };
    let date = new Date(objCopy.created_at)
    objCopy.created_at = date
    return objCopy
  })
};

exports.makeRefObj = list => {



};

exports.formatComments = (comments, articleRef) => { };
