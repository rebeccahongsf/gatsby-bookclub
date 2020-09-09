import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const BookItemWrapper = styled.section`
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0px 3px 5px rgba(14, 17, 17, 0.13);
  box-sizing: border-box;
  height: fit-content;
  padding: 32px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;

  h2 {
    span {
      font-weight: 400;
    }
  }

  a {
    padding: 1rem 2rem;
    background-color: #4caf50;
    color: #fff;
    text-decoration: none;

    &:hover,
    &:focus {
      background-color: #2e2d29;
      text-decoration: none;
    }
  }
`

const BookItemContent = styled.div`
  display: block;
  width: 75%;
`

const BookItemImg = styled.div`
  width: 25%;
  padding-left: 32px;

  img {
    height: auto;
    width: 100%;
  }
`

const BookItem = ({
  bookTitle,
  bookCover,
  bookSummary,
  authorName,
  children,
}) => {
  return (
    <BookItemWrapper>
      <BookItemContent>
        <h2>
          {bookTitle} — <span>{authorName}</span>
        </h2>
        <p>{bookSummary}</p>
        {children}
      </BookItemContent>
      <BookItemImg>
        <Img fixed={bookCover} alt={`${bookTitle} book cover`} />
      </BookItemImg>
    </BookItemWrapper>
  )
}

export default BookItem
