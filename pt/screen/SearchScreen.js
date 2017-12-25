//Shows a dummy screen when we Search
//This can be customised to include list of options in future
//
//importing components
import React,{Component} from "react";
import {Container,Header,Left,Body,Icon,Content,Button,Item,Input,FooterBottom,Right} from 'native-base';

export default class SearchScreen extends Component{
  //a dummy page to show profile using card
static navigationOptions ={
  title : 'SearchScreen' ,
  headerStyle : {backgroundColor: '#fff'},
  headerTitleStyle:{color:'blue'},

}

render(){
  return(
    <Container>
    <Header style={{backgroundColor:'white'}}>
    <Left>
    <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: 'blue'}} />
            </Button>
          </Left>
          <Body>
          <Item style={{width: 200}}>
          <Input placeholder="Search Twitter" />
        </Item>
          </Body>
          <Right />
        </Header>
        <Content padder>

        </Content>
        <FooterBottom/>
      </Container>
);
}
}
