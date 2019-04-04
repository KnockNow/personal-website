import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 1em;
  color: #fff;
  flex: 1;
`;

const Item = styled.div`
  margin-bottom: 3em;
  h1 {
    text-align: left;
    font-size: 1.3em;
    margin-bottom: 0;
    position: relative;
    border-bottom: 2px solid blue;
    color: #fff;
    display: inline-block;
  }

  h4 {
    margin: 0;
    font-weight: 100;
    color: #9b9b9b;
    font-style: italic;
  }

  p {
    padding-left: 1em;
    font-size: 1.2em;
    color: #ffffff;
    font-weight: 100;
    margin-top: 0;
    font-family: monospace;
    a {
      font-size: 0.8em;
      margin: 0;
      font-style: italic;
      color: red;
      font-weight: 100;
      border-bottom: 1px solid red;
    }
  }
`;

const Link = styled.a`
  display: block;
  color: #fff;
  text-decoration: underline !important;
  padding-left: 1em;
  font-size: 1.2em;
`;

const Bloc = ({item}) => {
  const { title, date, society, description, link, descriptionWithLink } = item
  return (
    <Item>
      <h1>{title}</h1>
      <h4>{`${date}${society && ' - '}${society}`}</h4>
      {description &&
        <p>{description} {link &&
          (<a target='_blank' href={link.url}>{link.name}</a>)}
        </p>}
      {descriptionWithLink &&
        descriptionWithLink.map(({name, link}, index) =>
          <Link key={index} target='_blank' href={link}>{name}</Link>)}
    </Item>
  )
}

class WorksList extends React.Component {
  render() {
    const { data, title } = this.props;
    return (
      <Container>
        <h2>{title}</h2>
        {data.map((item, index) => (<Bloc key={index} item={item} />))}
      </Container>
    )
  }
}

export default WorksList
