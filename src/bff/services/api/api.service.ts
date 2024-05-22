import { AxiosRequestConfig } from 'axios';
import axios from '@/bff/services/axios';
import { IATACodesEnum } from '@/bff/enums/codes';
import { AirFidsAirportDepartureIataResp } from '@/bff/models/air/airFidsAirportDepartureIata';

export default {
  getAirFidsAirportDepartureIata: async (IATA: IATACodesEnum) => {
    const config: AxiosRequestConfig = {
      params: {
        $orderby: 'ScheduleDepartureTime',
        $format: 'JSON'
      }
    };
    return axios.get<AirFidsAirportDepartureIataResp[]>(`/Air/FIDS/Airport/Departure/${IATA}`, config)
      .then((response) => response.data);
  }
};
