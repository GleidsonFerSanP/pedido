import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';
import { Service } from './service';

@Injectable()
export class TesteService extends Service {

    constructor(
        protected http: Http) {
        super(http);
    }

    public Send(request, callback) {
        this.post('/portal/v2/servicos/processo', request, false, (data) => {
            this.processResult(data, callback);
        });
    }
    // public update(notifications, background:boolean, callback) {
    //     this.post('/pshupd', notifications, background, (data) => {
    //         this.processResult(data, callback);
    //     });
    // }

    // private download(url, callback){
    //     const fileTransfer: FileTransferObject = this.transfer.create();
    //     fileTransfer.download(url, this.file.dataDirectory + 'pedido.pdf', true).then((entry) => {
    //         console.log('download complete: ' + entry.toURL());
    //         this.fileOpener.open(this.file.dataDirectory + 'pedido.pdf', 'application/pdf')
    //         .then(() =>{
    //             callback();
    //             this.loader.dismiss();
    //         })
    //         .catch(e => {
    //             callback(e);
    //             this.loader.dismiss();
    //         });
    //     }, (error) => {
    //         console.log("error transfer file", error);
    //         callback(error);
    //         this.loader.dismiss();
    //     });
    // }

    // public downloadFile(url, callback) {
    //     console.log(url);
    //     this.load();
    //     this.loader.present().then(() => {
    //         if(this.platform.is('android') || this.platform.is('ios')){
    //         this.download(url, callback);
    //         }else{
    //         window.open( url, '_system');
    //         }
    //     });
      
    // }
}
