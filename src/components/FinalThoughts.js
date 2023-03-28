import styled from 'styled-components';

const Container = styled.div`
    background-color: #DED5CD;
    padding: 3rem 0;
    box-shadow: 0 0 20px 20px #DED5CD;


  `
const Text = styled.div`
    margin: 2rem 25rem 1rem;
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
        While watching the first season, I was sure Shiv was going to be the next CEO. I saw her as smart, strong, 
         and a modern leader. Quickly, however, Shiv’s compassionate girboss facade 
         falls apart and she is revealed to be the most selfish and incompetent of her 
         siblings. At first I was shocked by her acts of selfishness and stupidity, 
         but in hindsight makes total sense with the wave of lean-in feminism the show aligns her with.
        </p>
        <p>
        Every week I’m outwitted by Succession, and I love it. But, I thought 
        that maybe with my skills with data and sheer dedication to the show, I could 
        figure out this perpetual question of who is going to succeed, through the powers of visualization. 
        My skills have led me to conclude that <b>Roman is the only answer</b>. He has the skills, instinct, 
        and proves himself to the business and Logan more often than anyone else. 
        However, this method of wins and losses seem to be how the kids view their position and might be 
        a naiive way to do any sort of analysis. Many people think the show is setting up Greg, with is humble roots,
        up to be the victor and I totally think this is a possibility. Regardless, I'm just excited to see how 
        season 4 will continue to shock and surprise me!
        </p>
        </Text>
        </Container>
    );
}
export default FinalThoughts