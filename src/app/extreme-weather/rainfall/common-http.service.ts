
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , throwError, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { ProjConstants } from 'src/app/shared/proj.constant';


@Injectable({
    providedIn : 'root'
})
export class  CommonHttpService {
        private baseUrl: string = ProjConstants.API_URL;
        private API_MAPPING: object = ProjConstants.API_MAPPING;
        public cachedflag: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
        constructor(private http: HttpClient) { }

        getHeaders() {
            const headers = new HttpHeaders();
            headers.append('Content-Type', 'application/json');
            return headers;
        }


        makePostApiCall(api: string, postData: any): Observable<any> {
            const apiStatus: any = this.isValidAPICall(api);
            if (!!apiStatus.valid) {
                return this.http.post(this.baseUrl + '' + apiStatus.api, postData, {headers: this.getHeaders()});
            } else {
                return throwError({status: false, msg: apiStatus.msg});
            }

        }

        makeGetApiCall(api: string, requestData: any): Observable<any> {

            // const apiStatus: any = this.isValidAPICall(api);
            // if (!!apiStatus.valid) {
            //     for (const val in requestData) {

            //         if (apiStatus.api.indexOf(val)) {

            //           apiStatus.api = apiStatus.api.replace( new RegExp(val, 'g'), requestData[val]);
            //         }

            //         }

            //     return this.http.get(this.baseUrl + '' + apiStatus.api, {headers: this.getHeaders()});
            // } else {
            //       // console.log("entered into not this");
            //     return throwError({status: false, msg: apiStatus.msg});
            // }
            return this.http.get('https://forecast.vassarlabs.com/api/commanddashboard/getdashboarddata/RAINFALL/forecast/District');
        }


        isValidAPICall(api: string): object {
            if (!isNullOrUndefined(this.API_MAPPING)) {
              const currentApi = this.API_MAPPING[api];
              if (!isNullOrUndefined(currentApi)) {
                return {valid: true, api: currentApi};
              } else {
                console.log('API_MAPPING not found for for ' + api + '..Please update API_MAPPING in projconstants');
                return {valid: false, msg: 'API_MAPPING not found for ' + api};
              }
            } else {
              console.log('API_MAPPING not found in projconstants');
              return {valid: false, msg: 'API_MAPPING not found in projconstants'};
            }
          }
          onNotify(event) {
            // changes the value of cachedflag to false
            this.cachedflag.next(false);
          }


}