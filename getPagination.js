const renderPageLimit = 5 // change the render page amount
const { currentPage, totalPage, renderPages } = getPagination(25, 5, 33)

function getPagination (offset, limit, total) {
  const totalPage = Math.ceil(total / limit)
  const currentPage = Math.ceil((offset + 1) / limit)
  const halfRenderPageLimit = Math.floor(renderPageLimit / 2)
  const renderPages = []

  if (currentPage + limit <= totalPage) {
    for (let i = 1; i <= limit; i++) {
      renderPages.push(i)
    }
  } else if (totalPage - currentPage <= halfRenderPageLimit) {
    for (let i = totalPage; i > totalPage - renderPageLimit; i--) {
      renderPages.unshift(i)
    }
  } else {
    for (let i = -halfRenderPageLimit; i <= halfRenderPageLimit; i++) {
      renderPages.push(currentPage + i)
    }
  }
  return { currentPage, totalPage, renderPages }
}
console.log('currentPage', currentPage)
console.log('totalPage', totalPage)
console.log('renderPages', renderPages)
