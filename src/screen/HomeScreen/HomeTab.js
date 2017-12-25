import React from 'react';
import { Image } from 'react-native';

 import {  Content,Text,CardItem,Card,Left,Thumbnail,Body,Button,Icon,Right} from 'native-base';


//contains list of twitter cards..
const HomeTab = () => {

    return (
  <Content>
  <Card>
          <CardItem>
            <Left>
                   <Thumbnail source={require("../../assets/images/har.jpg")} />
              <Body>
                <Text>Hargun Singh</Text>
                <Text note>@geek</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
                 <Image source={require("../../assets/images/butterfly.jpg")} style={{height: 200, width: null, flex: 1}} />
          </CardItem>
          <CardItem><Text>Saw a Beautiful Butterfly</Text>
          </CardItem>
          <CardItem>
            <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>5 Likes</Text>
                </Button>

                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
                </Left>
                <Right>


                <Text>5h ago</Text>
                </Right>

            </CardItem>
        </Card>

        <Card>
                <CardItem>
                  <Left>
                         <Thumbnail source={require("../../assets/images/har.jpg")} />
                    <Body>
                      <Text>Hargun Singh</Text>
                      <Text note>@geek</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                       <Image source={require("../../assets/images/mushrooms.jpg")} style={{height: 200, width: null, flex: 1}} />
                </CardItem>
                <CardItem><Text>Found these when wandering in the woods</Text>
                </CardItem>
                <CardItem>
                  <Left>
                      <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>50 Likes</Text>
                      </Button>

                      <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>22 Comments</Text>
                      </Button>
                      </Left>
                      <Right>


                      <Text>11h ago</Text>
                      </Right>

                  </CardItem>
              </Card>
              <Card>
                      <CardItem>
                        <Left>
                               <Thumbnail source={require("../../assets/images/har.jpg")} />
                          <Body>
                            <Text>Hargun Singh</Text>
                            <Text note>@geek</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody>
                             <Image source={require("../../assets/images/tree.jpg")} style={{height: 200, width: null, flex: 1}} />
                      </CardItem>
                      <CardItem><Text>Give Back to nature</Text>
                      </CardItem>
                      <CardItem>
                        <Left>
                            <Button transparent>
                              <Icon active name="thumbs-up" />
                              <Text>100 Likes</Text>
                            </Button>

                            <Button transparent>
                              <Icon active name="chatbubbles" />
                              <Text>50 Comments</Text>
                            </Button>
                            </Left>
                            <Right>


                            <Text>1 day ago</Text>
                            </Right>

                        </CardItem>
                    </Card>
  </Content>
);
  };

export default HomeTab;
