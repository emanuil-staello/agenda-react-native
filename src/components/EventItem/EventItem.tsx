import dayjs from 'dayjs';
import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Event } from 'src/types';
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
    <TouchableOpacity style={{ flex: 1,
    padding: 5,
    flexDirection: 'row',
    backgroundColor:rest.color,
                             }} 
      onPress={onEventPress}>
      <View style={viewStyles.circleContainer}>
{/*         <Circle size={15} color={rest.color} /> */}
       <Text style={{backgroundColor:'#fff',fontSize:16,fontWeight:'bold',color:'#000',padding:5,borderRadius:5,textTransform:'uppercase',minWidth:103}}>{status}</Text>
      </View>
      <View>
        <Text style={textStyles.title}>{name}</Text>
       
        <Text style={textStyles.subtitle}>{date}</Text>
        <Text style={textStyles.subtitle}>Service:{service}</Text>
        <Text style={textStyles.subtitle}>Revenue: ${value}</Text>
      </View>
    </TouchableOpacity>
  );
};
