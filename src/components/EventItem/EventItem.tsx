import dayjs from 'dayjs';
import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Event } from 'src/types';
import { LinearGradient } from 'expo-linear-gradient';
// import { Circle } from '../Circle/Circle';

import { viewStyles, textStyles } from './EventItem.styles';

type EventItemProps = {
  onPress?: (event: Event) => void;
} & Event;

export const EventItem = ({ onPress, ...rest }: EventItemProps) => {
  const onEventPress = useCallback(() => onPress?.(rest), [onPress, rest]);
  const { name, startDate, endDate,service,status,value } = rest;

  const date = `${dayjs(startDate).format('HH:mm')} to ${dayjs(endDate).format(
    'HH:mm'
  )}`;

  return (
    <LinearGradient
            colors={status === 'completed' ? ['#099773','#43b692'] : status === 'pending' ? ['#5ab2f7','#12cff3']:['#CB356B','#BD3F32']}
            // colors={['#5ab2f7','#12cff3']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={{flex: 1,padding:10,marginBottom:5}}
    
          >
    <TouchableOpacity style={{ flex: 1,
    padding: 5,
    flexDirection: 'row',
                             }} 
      onPress={onEventPress}>
      
      <View style={viewStyles.circleContainer}>
{/*         <Circle size={15} color={rest.color} /> */}
       <Text style={{backgroundColor:'#fff',fontSize:16,fontWeight:'bold',color:'#000',padding:5,borderRadius:5,textTransform:'uppercase',minWidth:103,textAlign:'center'}}>{status}</Text>
      </View>
      <View>
        <Text style={textStyles.title}>{name}</Text>
       
        <Text style={textStyles.subtitle}>{date}</Text>
        <Text style={textStyles.subtitle}>Service:{service}</Text>
        <Text style={textStyles.subtitle}>Revenue: ${value}</Text>
      </View>
   
    </TouchableOpacity>
    </LinearGradient>
  );
};
