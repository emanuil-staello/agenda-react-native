import { SectionListProps, TextStyle, ViewStyle } from 'react-native';
import {
  LocaleType,
  MarkedDays,
  MonthProps,
  ThemeType as MonthThemeType,
} from 'react-native-month';

export type Event = {
  name: string;
  startDate: Date;
  endDate: Date;
  color: string;
  customer_id:string;
  customer_status:string;
  event_start_date:string;
  event_end_date:string;
  event_duration:string;
  service_type:string;
  service_revenue:string;
  service_name:string;
  car_type:string;
  car_brand:string;
  car_model:string;
  car_color:string;
  car_year:string;
  changeEventStatus: (
    id: string,
    businessId: string,
    locationId: string,
    ownerId: string,
    start: Date
  ) => void;
  handle_date_modal:(
    startDate: string,
    id:string,
  );
 updateState: Dispatch<SetStateAction<any>>;
  
};

type ValueOf<T> = T[keyof T];

/**
 * @format 'YYYY-MM-DD'
 */
type MonthDayKey = string;

type MarkedDay = ValueOf<MarkedDays>;
export type ExtendedMarkedDay = MarkedDay & { events: Event[] };
export type ExtendedMarkedDays = Record<MonthDayKey, ExtendedMarkedDay>;

interface EventsThemeType {
  sectionHeaderContainer?: ViewStyle;
  sectionHeaderFont?: TextStyle;
  sectionFooterContainer?: ViewStyle;
  sectionFooterFont?: TextStyle;
}

interface EventThemeType {}

export interface ThemeType extends EventThemeType, EventsThemeType {
  container?: ViewStyle;
  monthContainer?: ViewStyle;
}

export { MonthThemeType };

interface AgendaMonthProps
  extends Pick<
    MonthProps,
    'firstDayMonday' | 'dayNames' | 'disableOffsetDays'
  > {}

type AgendaViewType = 'month' | 'week' | 'none';

export interface AgendaProps extends AgendaMonthProps {
  /**
   * selected day of the Agenda
   *
   * @format 'YYYY-MM-DD'
   * @type {string}
   * @memberof AgendaProps
   */
  selectedDay?: Date;
  events?: Event[];
  onDayPress?: (date: Date) => void;
  onEventPress?: (event: Event) => void;
  monthTheme?: MonthThemeType;
  theme?: ThemeType;
  renderSectionHeader?: SectionListProps<Event>['renderSectionHeader'];
  locale?: LocaleType;
  firstDayMonday?: boolean;
  viewType?: AgendaViewType;
}
