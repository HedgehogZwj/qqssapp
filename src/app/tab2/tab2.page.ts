import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ControlShow() {
    const pages = document.getElementsByClassName('page');
    pages[0].className = 'page';
    pages[1].className = 'page hide';
  }
  DataShow() {
    const pages = document.getElementsByClassName('page');
    pages[0].className = 'page hide';
    pages[1].className = 'page';
  }
  t1;
  t2;
  MINTEM$ = 0;
  MAXTEM$ = 0;
  HUM$ = 0;
  baseUrl = 'http://192.168.43.17:8000/';
  option = {
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [0, 0, 0, 0, 0, 0],
      type: 'line'
    }]
  };
  option2 = {
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [0, 0, 0, 0, 0, 0],
      type: 'line'
    }]
  };
  led = 0;
  air = 0;
  warm = 0;
  hum = 0;
  Speed$ = 0;
  LED() {
    if (this.led == 0) this.led = 1;
    else this.led = 0;
    this.hc.put(this.baseUrl + 'SetLED', { status: this.led }).subscribe((val: any) => {
    })
  }
  AIR() {
    if (this.air == 0) this.air = 1;
    else this.air = 0;
    this.hc.put(this.baseUrl + 'SetAIR', { status: this.air }).subscribe((val: any) => {
    })
  }
  WARM() {
    if (this.warm == 0) this.warm = 1;
    else this.warm = 0;
    this.hc.put(this.baseUrl + 'SetWARM', { status: this.warm }).subscribe((val: any) => {
      console.log('open')
    })
  }
  HUM() {
    if (this.hum == 0) this.hum = 1;
    else this.hum = 0;
    this.hc.put(this.baseUrl + 'SetADDHUM', { status: this.hum }).subscribe((val: any) => {
      console.log('open')
    })
  }
  SetFAN(status: number) {
    this.Speed$ = status;
    this.hc.put(this.baseUrl + 'SetFAN', { status: status }).subscribe((val: any) => {
      console.log('fan')
    })
  }
  SetHUM() {
    this.HUM$ = Number.parseInt((<HTMLInputElement>document.getElementById('Humidifier')).value);
    this.hc.put(this.baseUrl + 'SETHUM', { value: this.HUM$ }).subscribe((val: any) => {

    })
  }
  SetAIR() {
    this.MAXTEM$ = Number.parseInt((<HTMLInputElement>document.getElementById('maxtem')).value);
    this.hc.put(this.baseUrl + 'SETMAXTEM', { value: this.MAXTEM$ }).subscribe((val: any) => {
      console.log(this.MAXTEM$)
    })
  }
  SetWARM() {
    this.MINTEM$ = Number.parseInt((<HTMLInputElement>document.getElementById('mintem')).value);
    this.hc.put(this.baseUrl + 'SETMINTEM', { value: this.MINTEM$ }).subscribe((val: any) => {
      console.log(this.MINTEM$)
    })
  }

  constructor(private hc: HttpClient) { }
  ionViewWillEnter() {
    console.log('enter')
    clearInterval(this.t2);
    this.option = {
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [],
        type: 'line'
      }]
    };
    clearInterval(this.t1);
    this.option2 = {
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [],
        type: 'line'
      }]
    };
    var date = new Date();
    // for (let i = 0; i < 7; i++) this.option.xAxis.data.push(date.toLocaleString().substring(date.toLocaleString().length - 8, date.toLocaleString().length));//设置当前时间分秒
    var myChart = echarts.init(<HTMLDivElement>document.getElementById('echart'));
    this.t2 = setInterval(() => {
      date = new Date();
      if (this.option.xAxis.data.length == 7) // 如果数组中存在7个数据则删除第一个
      {
        this.option.xAxis.data.splice(0, 1);
      }
      var string = date.toLocaleString();
      var ans = "";
      for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] != ':' && (string[i] < '0' || string[i] > '9')) {
          break;
        }
        ans = string[i] + ans;
      }
      this.option.xAxis.data.push(ans);//设置当前时间分秒
      if (this.option.series[0].data.length == 7) // 如果数组中存在7个数据则删除第一个
      {
        this.option.series[0].data.splice(0, 1);
      }
      this.hc.get(this.baseUrl + 'TEM').subscribe((val: any) => {
        this.option.series[0].data.push(val);//在data里插入光照值
      })
      myChart.setOption(<EChartOption>this.option);
    }, 3000);

    // for (let i = 0; i < 7; i++) this.option2.xAxis.data.push(date.toLocaleString().substring(date.toLocaleString().length - 8, date.toLocaleString().length));//设置当前时间分秒
    var myChart2 = echarts.init(<HTMLDivElement>document.getElementById('echart2'));

    this.t1 = setInterval(() => {
      date = new Date();
      if (this.option2.xAxis.data.length == 7) // 如果数组中存在7个数据则删除第一个
      {
        this.option2.xAxis.data.splice(0, 1);
      }
      var string = date.toLocaleString();
      var ans = "";
      for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] != ':' && (string[i] < '0' || string[i] > '9')) {
          break;
        }
        ans = string[i] + ans;
      }
      this.option2.xAxis.data.push(ans);//设置当前时间分秒
      if (this.option2.series[0].data.length == 7) // 如果数组中存在7个数据则删除第一个
      {
        this.option2.series[0].data.splice(0, 1);
      }
      this.hc.get(this.baseUrl + 'HUM').subscribe((val: any) => {
        this.option2.series[0].data.push(val);//在data里插入光照值
      })
      myChart2.setOption(<EChartOption>this.option2);
    }, 3000);
  }

}
