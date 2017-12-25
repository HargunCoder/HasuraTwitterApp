import React,{Component} from "react";
import { Image, StatusBar, Settings } from "react-native";
import {Button,Icon,Container,Content,Card,CardItem,Footer,Text,Left,Thumbnail,Right,Body,FooterTab} from "native-base";
//using native base for styling

export default class SideBar extends Component {
render(){
  return(
    <Container>
    <Card transparent>
               <CardItem>
                 <Left>
                   <Thumbnail source={require("../../assets/images/har.jpg")} />
                   <Body>

                   </Body>
                 </Left>
               </CardItem>

               <CardItem>
                 <Left>

                   <Body>
                     <Text style={{fontSize:20 ,fontWeight:'bold'}}>Hargun Singh</Text>
                     <Text note>@geek</Text>
                   </Body>
                 </Left>
               </CardItem>

                              <CardItem>

                              <Text style={{fontWeight:'bold'}}>53 </Text>
                              <Text>Following   </Text>

                              <Text style={{fontWeight:'bold'}}>59 </Text>
                              <Text>Followers</Text>

                              </CardItem>


             </Card>
             <Card transparent>
              <CardItem>
                <Button full transparent>
                <Icon name='ios-person' />
                <Text>  Profile</Text>
                </Button>
              </CardItem>
              <CardItem>
                <Button full transparent>
                <Icon name='ios-list' />
                <Text>   Lists</Text>
                </Button>
              </CardItem>
              <CardItem>
                <Button full transparent>
                <Icon name='ios-thunderstorm-outline' />
                <Text>Moments</Text>
                </Button>
              </CardItem>
              </Card>
              <Card transparent>

             <CardItem>
            <Text>Settings and Privacy</Text>
             </CardItem>

             <CardItem>
          <Text>Help Centre</Text>
             </CardItem>
             </Card>








    <Footer style={{backgroundColor:'white'}}>
    <FooterTab padder style={{backgroundColor:'white'}}>

    <Left>
    <Icon name="ios-moon" />
    </Left>
    <Body />
    <Right>
    <Icon name="ios-qr-scanner-outline" />
    </Right>
    </FooterTab>
    </Footer>

    </Container>
  );
}
}
