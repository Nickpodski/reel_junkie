import React, { useState } from 'react';
import { useEffect } from 'react';
import { Pagination, Button } from 'react-bootstrap';


const PaginationItems = (props) => {
  const {pages, pageItemClick, active} = props;
  const [activeClick, setActiveClick] = useState([]);
  let items = [];
  let a;
  let a1;
  let a2;
  let a3;

  useEffect(() => {
    setActiveClick(active);
  })

  const handleClick = (e) => {
    e.preventDefault();
    const res = e.target.innerHTML;
    setActiveClick(res);
    props.setActivePage(res);
  }


  if (activeClick === undefined) {
    a = 1;
  } else {
    a = active;
  }

  if (a + 1 >= pages) {
    a1 = a - 3;
  } else {
    a1 = a + 1;
  }

  if (a + 2 >= pages) {
    a2 = a - 2;
  } else {
    a2 = a + 2;
  }

  if (a + 3 >= pages) {
    a3 = a - 1;
  } else {
    a3 = a + 3;
  }

  if (pages <= 10) {
    for (let i = 1; i <= pages; i++) {
      items.push(
        <Pagination.Item key={i} active={i === a}>
          {i}
        </Pagination.Item>
      )
    }
  } else {
    items.push(
      <>
        <Pagination.Item key={1} active={1 === a}>
          {1}
        </Pagination.Item>
        <Pagination.Ellipsis key="ellipsis1"/>

          <Pagination.Item key={a1} active={a1 === a}>
            {a1}
          </Pagination.Item>
          <Pagination.Item key={a2} active={a2 === a}>
            {a2}
          </Pagination.Item>
          <Pagination.Item key={a3} active={a3 === a}>
            {a3}
          </Pagination.Item>

        <Pagination.Ellipsis key="ellipsis2"/>
        <Pagination.Item key={pages} active={pages === a} >
          <Button onClick={handleClick}>{pages}</Button>
        </Pagination.Item>
      </>
    )
  }
  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  )
}

export default PaginationItems;