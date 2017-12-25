import React,{Component} from 'react';
import {Content,Button,Header,Text,Title,Left,Right,Body,Footer,FooterTab,Thumbnail,Icon,Container,Tabs,Tab,TabHeading,Fab } from 'native-base';

import Tab1 from './tabOne';


class MainScreen extends Component{

  render () {
    return(
      <Container>
        <Header hasTabs androidStatusBarColor='#e3eaf4' iosBarStyle='light-content' style={styles.headerStyle}>
          <Left>
            <Thumbnail small source={require('./me.jpg')} />

          </Left>
          <Body >
            <Title style={styles.headerTitle}>Home</Title>
          </Body>
          <Right />
          </Header>




        <Tabs tabBgColor='#fff' >
        <Tab heading={<TabHeading><Icon name="home" /></TabHeading>} tabStyle={{backgroundColor: 'red'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'red'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Tab1/>
           </Tab>

         <Tab style={styles.tabStyle} heading={ <TabHeading><Icon name="search" color='#af34a4' /></TabHeading>} tabStyle={{backgroundColor:'#fff'}}>
         <Tab1/>
         </Tab>
         <Tab heading={ <TabHeading><Icon name="ios-notifications" /></TabHeading>}>
         <Tab1 />
         </Tab>

         <Tab heading={ <TabHeading><Icon name="mail" /></TabHeading>}>
         <Tab1 />
         </Tab>
            </Tabs>






        <Footer>
                <FooterTab>
                  <Button vertical>

                    <Title>All</Title>
                  </Button>
                  <Button vertical>

                    <Title>Mentions</Title>
                  </Button>
                  <Button vertical>
                  </Button>
                  <Button vertical>
                  </Button>
                  <Button vertical>
                    <Icon name="settings" />

                  </Button>
                </FooterTab>
              </Footer>


      </Container>
    );
  }


}

const styles={

  headerStyle:{
    backgroundColor:'#fff',
    elevation:1
  },

  headerTitle:{
    color:'#000',
fontSize:25
},

tabStyle:{
  backgroundColor:'#1dcaff'
}

}


export default MainScreen;
