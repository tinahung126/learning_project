const limitPages = 5 // default = 5, you can change this.
const { currentPage, totalPage, renderPages } = getPagination(35, 5, 33)

function getPagination (offset, limit, total) {
  // Error handle
  if (limit <= 0 || total <= 0) {
    console.log('輸入值不可為負或 0')
    return
  }
  if (offset > total) {
    console.log('資料開始位置大於資料總數')
    return
  }

  const totalPage = Math.ceil(total / limit)
  const currentPage = Math.ceil((offset + 1) / limit)
  const renderPages = []

  for (let i = 0; i < limitPages; i++) {
    const halfPage = Math.floor(limitPages / 2)
    
    if ((currentPage - halfPage) <= 0 || limitPages >= totalPage) {
      renderPages.push(i + 1)
    } else if ((currentPage + halfPage) > totalPage) {
      renderPages.unshift(totalPage - i)
    } else {
      renderPages.push((currentPage - halfPage) + i)
    }
  }

  return { currentPage, totalPage, renderPages }
}

console.log(currentPage, totalPage, renderPages)
