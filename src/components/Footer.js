import styled from 'styled-components';

const Container = styled.div`
    width: 100% ;
    background-color: #2C3246;    
    display: flex;
    padding: 2rem;
    

  `
const Text = styled.span`
    line-height: 1.3;
    color: white;
    text-align: left;
`
const LinkSyle = styled.a`
    color: white;
`
const Footer = ( ) => {

    return (
        <Container>
        <Text>
            This article was created out of appreciation for the television Succession using Victory, React, and Rc-Slider. <br/>
            If you are interested in checking out the dataset I hand collected check out this <LinkSyle href="https://docs.google.com/spreadsheets/d/1MSTiV0q-nzshGusjumw77pOERECGZPwN7EBgGlhJ2Bo/edit?usp=sharing">link</LinkSyle>. 
           If you are interested in other work I've done checkout my website  <LinkSyle href="riagarg.com"> riagarg.com</LinkSyle>.
        </Text>
        </Container>
    );
}
export default Footer