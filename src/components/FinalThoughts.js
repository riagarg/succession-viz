import styled from 'styled-components';

const Container = styled.div`
    adding-top: 10px;
    background-color: #DED5CD;
    padding: 5rem 0;
    box-shadow: 0 0 20px 20px #DED5CD;


  `
const Text = styled.div`
    margin: 2rem 30rem 1rem;
    line-height: 1.8;
`
const SectionTitle = styled.h2`
	font-weight: 600;
	text-align: center;
`
const FinalThoughts = ( ) => {

    return (
        <Container>
 
        <SectionTitle>
            FINAL THOUGHTS
        </SectionTitle>
        <Text>
        <p>
         Succession to me is totally unpredictable, I'm always wrong when I guess what is going to happen. And when I’m wrong I’m not at all mad,
         because the show is always right. While watching the first season, 
         I was sure Shiv was going to be the next CEO. I saw her as smart, strong, 
         and a modern leader. Quickly, however, Shiv’s compassionate girboss facade 
         falls apart and she is revealed to be the most selfish and incompetent of her 
         siblings. At first I was shocked by her acts of selfishness and stupidity, 
         but in hindsight makes total sense with the wave of lean-in feminism the show aligns her with.
        </p>
        <p>
        Every week I’m outwitted by Succession, and I truly love it. But, I thought 
        that maybe with my skills with data and sheer dedication to the show, I could 
        figure out the central conflict through the powers of visualization. My skills have led me to conclude that Roman is the only answer,
        however I can't wait to see how season 4 surprises me. 
        </p>
        </Text>
        </Container>
    );
}
export default FinalThoughts