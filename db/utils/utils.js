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
  return list.map(listA => {
    let newObj = {}
    newObj[listA.title] = listA.article_id
    return newObj
  })

};

exports.formatComments = (comments, articleRef) => {
  if (comments.length === 0) return []

  comments.articleRef = comments.created_at

  console.log(comments)
}







