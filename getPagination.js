const { currentPage, totalPage, renderPages } = getPagination(offset, limit, total)

function getPagination (offset, limit, total) {
  const totalPage = Math.ceil(total / limit)
  const currentPage = Math.ceil((offset + 1) / limit)
  let renderPages = []
  if (currentPage + limit <= totalPage) {
    for (let i = 1; i <= limit; i++) {
      renderPages.push(i)
    }
  } else if (totalPage - currentPage <= 2) {
    for (let i = totalPage; i > totalPage - 5; i--) {
      renderPages.unshift(i)
    }
  } else {
    renderPages = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]
  }
  return { currentPage, totalPage, renderPages }
}
console.log('currentPage', currentPage)
console.log('totalPage', totalPage)
console.log('renderPages', renderPages)