import React from 'react';
import { View, ScrollView } from 'react-native';
import Contributor from './Contributor';
 
export default function Listagem() {
  
    let contributors = [] 
    
    const listcontributors = [ 
        {"name":"Pedro", "points":"100" },
        {"name":"Jacques", "points":"100"},
        {"name":"Israel", "points":"100"}
    ];

    listcontributors.forEach(contributorItem => {
      contributors.push(
        <Contributor contributor={contributorItem}/>
        )
    })

  return (
    <View >
        <ScrollView >
          {contributors}
        </ScrollView>
    </View>
  );
}