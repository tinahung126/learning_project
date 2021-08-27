const renderPageLimit = 5 // change the render page amount
const { currentPage, totalPage, renderPages } = getPagination(offset, limit, total)

function getPagination (offset, limit, total) {
  if (limit <= 0 || total <= 0) {
    console.log('輸入值不可為負或 0')
    return
  }

  const totalPage = Math.ceil(total / limit)
  let currentPage = Math.ceil((offset + 1) / limit)
  const halfRenderPageLimit = Math.floor(renderPageLimit / 2)
  const renderPages = []

  // If offset > total
  if (offset > total) {
    currentPage = totalPage
  }

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