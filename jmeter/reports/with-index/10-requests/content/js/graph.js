/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 121.0, "minX": 0.0, "maxY": 998.0, "series": [{"data": [[0.0, 121.0], [0.1, 121.0], [0.2, 131.0], [0.3, 131.0], [0.4, 148.0], [0.5, 148.0], [0.6, 149.0], [0.7, 149.0], [0.8, 156.0], [0.9, 156.0], [1.0, 157.0], [1.1, 157.0], [1.2, 157.0], [1.3, 157.0], [1.4, 161.0], [1.5, 161.0], [1.6, 161.0], [1.7, 172.0], [1.8, 172.0], [1.9, 172.0], [2.0, 172.0], [2.1, 172.0], [2.2, 172.0], [2.3, 172.0], [2.4, 172.0], [2.5, 174.0], [2.6, 174.0], [2.7, 175.0], [2.8, 175.0], [2.9, 176.0], [3.0, 176.0], [3.1, 177.0], [3.2, 178.0], [3.3, 178.0], [3.4, 179.0], [3.5, 179.0], [3.6, 183.0], [3.7, 183.0], [3.8, 184.0], [3.9, 184.0], [4.0, 185.0], [4.1, 185.0], [4.2, 185.0], [4.3, 185.0], [4.4, 186.0], [4.5, 186.0], [4.6, 186.0], [4.7, 186.0], [4.8, 186.0], [4.9, 187.0], [5.0, 187.0], [5.1, 187.0], [5.2, 187.0], [5.3, 188.0], [5.4, 188.0], [5.5, 188.0], [5.6, 188.0], [5.7, 188.0], [5.8, 188.0], [5.9, 189.0], [6.0, 189.0], [6.1, 189.0], [6.2, 192.0], [6.3, 192.0], [6.4, 192.0], [6.5, 192.0], [6.6, 192.0], [6.7, 192.0], [6.8, 193.0], [6.9, 193.0], [7.0, 193.0], [7.1, 193.0], [7.2, 194.0], [7.3, 194.0], [7.4, 194.0], [7.5, 194.0], [7.6, 194.0], [7.7, 194.0], [7.8, 194.0], [7.9, 194.0], [8.0, 194.0], [8.1, 195.0], [8.2, 195.0], [8.3, 195.0], [8.4, 195.0], [8.5, 195.0], [8.6, 195.0], [8.7, 197.0], [8.8, 197.0], [8.9, 198.0], [9.0, 198.0], [9.1, 199.0], [9.2, 199.0], [9.3, 199.0], [9.4, 199.0], [9.5, 199.0], [9.6, 199.0], [9.7, 199.0], [9.8, 200.0], [9.9, 200.0], [10.0, 200.0], [10.1, 200.0], [10.2, 201.0], [10.3, 201.0], [10.4, 201.0], [10.5, 201.0], [10.6, 201.0], [10.7, 203.0], [10.8, 203.0], [10.9, 204.0], [11.0, 204.0], [11.1, 204.0], [11.2, 204.0], [11.3, 205.0], [11.4, 205.0], [11.5, 205.0], [11.6, 205.0], [11.7, 205.0], [11.8, 205.0], [11.9, 206.0], [12.0, 206.0], [12.1, 206.0], [12.2, 206.0], [12.3, 206.0], [12.4, 207.0], [12.5, 207.0], [12.6, 207.0], [12.7, 207.0], [12.8, 208.0], [12.9, 208.0], [13.0, 209.0], [13.1, 209.0], [13.2, 210.0], [13.3, 210.0], [13.4, 210.0], [13.5, 210.0], [13.6, 210.0], [13.7, 211.0], [13.8, 211.0], [13.9, 211.0], [14.0, 211.0], [14.1, 213.0], [14.2, 213.0], [14.3, 213.0], [14.4, 213.0], [14.5, 214.0], [14.6, 214.0], [14.7, 215.0], [14.8, 215.0], [14.9, 216.0], [15.0, 216.0], [15.1, 216.0], [15.2, 216.0], [15.3, 216.0], [15.4, 217.0], [15.5, 217.0], [15.6, 217.0], [15.7, 217.0], [15.8, 217.0], [15.9, 217.0], [16.0, 219.0], [16.1, 219.0], [16.2, 220.0], [16.3, 220.0], [16.4, 220.0], [16.5, 220.0], [16.6, 220.0], [16.7, 221.0], [16.8, 221.0], [16.9, 221.0], [17.0, 221.0], [17.1, 221.0], [17.2, 221.0], [17.3, 221.0], [17.4, 221.0], [17.5, 221.0], [17.6, 221.0], [17.7, 222.0], [17.8, 222.0], [17.9, 223.0], [18.0, 223.0], [18.1, 225.0], [18.2, 225.0], [18.3, 225.0], [18.4, 226.0], [18.5, 226.0], [18.6, 226.0], [18.7, 226.0], [18.8, 227.0], [18.9, 227.0], [19.0, 227.0], [19.1, 227.0], [19.2, 228.0], [19.3, 228.0], [19.4, 228.0], [19.5, 228.0], [19.6, 229.0], [19.7, 230.0], [19.8, 230.0], [19.9, 230.0], [20.0, 230.0], [20.1, 231.0], [20.2, 231.0], [20.3, 231.0], [20.4, 231.0], [20.5, 231.0], [20.6, 231.0], [20.7, 232.0], [20.8, 232.0], [20.9, 232.0], [21.0, 232.0], [21.1, 233.0], [21.2, 233.0], [21.3, 233.0], [21.4, 233.0], [21.5, 233.0], [21.6, 233.0], [21.7, 233.0], [21.8, 234.0], [21.9, 234.0], [22.0, 234.0], [22.1, 234.0], [22.2, 235.0], [22.3, 235.0], [22.4, 236.0], [22.5, 236.0], [22.6, 236.0], [22.7, 236.0], [22.8, 236.0], [22.9, 236.0], [23.0, 236.0], [23.1, 238.0], [23.2, 238.0], [23.3, 238.0], [23.4, 238.0], [23.5, 239.0], [23.6, 239.0], [23.7, 239.0], [23.8, 239.0], [23.9, 240.0], [24.0, 240.0], [24.1, 241.0], [24.2, 241.0], [24.3, 241.0], [24.4, 242.0], [24.5, 242.0], [24.6, 244.0], [24.7, 244.0], [24.8, 244.0], [24.9, 244.0], [25.0, 244.0], [25.1, 244.0], [25.2, 245.0], [25.3, 245.0], [25.4, 245.0], [25.5, 245.0], [25.6, 246.0], [25.7, 246.0], [25.8, 246.0], [25.9, 247.0], [26.0, 247.0], [26.1, 247.0], [26.2, 247.0], [26.3, 247.0], [26.4, 247.0], [26.5, 248.0], [26.6, 248.0], [26.7, 248.0], [26.8, 248.0], [26.9, 249.0], [27.0, 249.0], [27.1, 249.0], [27.2, 249.0], [27.3, 250.0], [27.4, 250.0], [27.5, 250.0], [27.6, 251.0], [27.7, 251.0], [27.8, 253.0], [27.9, 253.0], [28.0, 253.0], [28.1, 253.0], [28.2, 254.0], [28.3, 254.0], [28.4, 255.0], [28.5, 255.0], [28.6, 256.0], [28.7, 256.0], [28.8, 256.0], [28.9, 256.0], [29.0, 256.0], [29.1, 256.0], [29.2, 256.0], [29.3, 257.0], [29.4, 257.0], [29.5, 257.0], [29.6, 257.0], [29.7, 257.0], [29.8, 257.0], [29.9, 258.0], [30.0, 258.0], [30.1, 258.0], [30.2, 258.0], [30.3, 259.0], [30.4, 260.0], [30.5, 260.0], [30.6, 260.0], [30.7, 260.0], [30.8, 261.0], [30.9, 261.0], [31.0, 263.0], [31.1, 263.0], [31.2, 263.0], [31.3, 263.0], [31.4, 264.0], [31.5, 264.0], [31.6, 269.0], [31.7, 269.0], [31.8, 269.0], [31.9, 270.0], [32.0, 270.0], [32.1, 271.0], [32.2, 271.0], [32.3, 272.0], [32.4, 272.0], [32.5, 272.0], [32.6, 272.0], [32.7, 272.0], [32.8, 272.0], [32.9, 272.0], [33.0, 272.0], [33.1, 272.0], [33.2, 272.0], [33.3, 273.0], [33.4, 273.0], [33.5, 273.0], [33.6, 274.0], [33.7, 274.0], [33.8, 277.0], [33.9, 277.0], [34.0, 278.0], [34.1, 278.0], [34.2, 278.0], [34.3, 278.0], [34.4, 279.0], [34.5, 279.0], [34.6, 281.0], [34.7, 281.0], [34.8, 281.0], [34.9, 282.0], [35.0, 282.0], [35.1, 283.0], [35.2, 283.0], [35.3, 285.0], [35.4, 285.0], [35.5, 285.0], [35.6, 285.0], [35.7, 285.0], [35.8, 285.0], [35.9, 286.0], [36.0, 286.0], [36.1, 289.0], [36.2, 289.0], [36.3, 289.0], [36.4, 290.0], [36.5, 290.0], [36.6, 290.0], [36.7, 290.0], [36.8, 291.0], [36.9, 291.0], [37.0, 291.0], [37.1, 291.0], [37.2, 292.0], [37.3, 292.0], [37.4, 293.0], [37.5, 293.0], [37.6, 293.0], [37.7, 293.0], [37.8, 294.0], [37.9, 294.0], [38.0, 294.0], [38.1, 295.0], [38.2, 295.0], [38.3, 295.0], [38.4, 295.0], [38.5, 296.0], [38.6, 296.0], [38.7, 296.0], [38.8, 296.0], [38.9, 296.0], [39.0, 296.0], [39.1, 297.0], [39.2, 297.0], [39.3, 298.0], [39.4, 300.0], [39.5, 300.0], [39.6, 300.0], [39.7, 300.0], [39.8, 300.0], [39.9, 300.0], [40.0, 302.0], [40.1, 302.0], [40.2, 302.0], [40.3, 302.0], [40.4, 302.0], [40.5, 302.0], [40.6, 303.0], [40.7, 303.0], [40.8, 303.0], [40.9, 303.0], [41.0, 303.0], [41.1, 306.0], [41.2, 306.0], [41.3, 306.0], [41.4, 306.0], [41.5, 307.0], [41.6, 307.0], [41.7, 308.0], [41.8, 308.0], [41.9, 308.0], [42.0, 308.0], [42.1, 309.0], [42.2, 309.0], [42.3, 309.0], [42.4, 309.0], [42.5, 312.0], [42.6, 312.0], [42.7, 312.0], [42.8, 313.0], [42.9, 313.0], [43.0, 314.0], [43.1, 314.0], [43.2, 314.0], [43.3, 314.0], [43.4, 315.0], [43.5, 315.0], [43.6, 315.0], [43.7, 315.0], [43.8, 316.0], [43.9, 316.0], [44.0, 316.0], [44.1, 317.0], [44.2, 317.0], [44.3, 317.0], [44.4, 317.0], [44.5, 319.0], [44.6, 319.0], [44.7, 320.0], [44.8, 320.0], [44.9, 320.0], [45.0, 320.0], [45.1, 321.0], [45.2, 321.0], [45.3, 321.0], [45.4, 321.0], [45.5, 323.0], [45.6, 323.0], [45.7, 323.0], [45.8, 324.0], [45.9, 324.0], [46.0, 324.0], [46.1, 324.0], [46.2, 324.0], [46.3, 324.0], [46.4, 324.0], [46.5, 324.0], [46.6, 325.0], [46.7, 325.0], [46.8, 325.0], [46.9, 325.0], [47.0, 325.0], [47.1, 325.0], [47.2, 325.0], [47.3, 325.0], [47.4, 325.0], [47.5, 325.0], [47.6, 325.0], [47.7, 327.0], [47.8, 327.0], [47.9, 327.0], [48.0, 327.0], [48.1, 328.0], [48.2, 328.0], [48.3, 329.0], [48.4, 329.0], [48.5, 329.0], [48.6, 330.0], [48.7, 330.0], [48.8, 330.0], [48.9, 330.0], [49.0, 330.0], [49.1, 330.0], [49.2, 331.0], [49.3, 331.0], [49.4, 332.0], [49.5, 332.0], [49.6, 334.0], [49.7, 334.0], [49.8, 335.0], [49.9, 335.0], [50.0, 335.0], [50.1, 335.0], [50.2, 335.0], [50.3, 336.0], [50.4, 336.0], [50.5, 338.0], [50.6, 338.0], [50.7, 339.0], [50.8, 339.0], [50.9, 340.0], [51.0, 340.0], [51.1, 341.0], [51.2, 341.0], [51.3, 342.0], [51.4, 342.0], [51.5, 343.0], [51.6, 345.0], [51.7, 345.0], [51.8, 346.0], [51.9, 346.0], [52.0, 347.0], [52.1, 347.0], [52.2, 348.0], [52.3, 348.0], [52.4, 350.0], [52.5, 350.0], [52.6, 351.0], [52.7, 351.0], [52.8, 351.0], [52.9, 351.0], [53.0, 351.0], [53.1, 351.0], [53.2, 351.0], [53.3, 353.0], [53.4, 353.0], [53.5, 353.0], [53.6, 353.0], [53.7, 354.0], [53.8, 354.0], [53.9, 354.0], [54.0, 354.0], [54.1, 355.0], [54.2, 355.0], [54.3, 355.0], [54.4, 355.0], [54.5, 356.0], [54.6, 356.0], [54.7, 356.0], [54.8, 356.0], [54.9, 356.0], [55.0, 356.0], [55.1, 356.0], [55.2, 359.0], [55.3, 359.0], [55.4, 359.0], [55.5, 359.0], [55.6, 360.0], [55.7, 360.0], [55.8, 361.0], [55.9, 361.0], [56.0, 361.0], [56.1, 362.0], [56.2, 362.0], [56.3, 364.0], [56.4, 364.0], [56.5, 365.0], [56.6, 365.0], [56.7, 366.0], [56.8, 366.0], [56.9, 366.0], [57.0, 366.0], [57.1, 366.0], [57.2, 366.0], [57.3, 368.0], [57.4, 368.0], [57.5, 368.0], [57.6, 370.0], [57.7, 370.0], [57.8, 370.0], [57.9, 370.0], [58.0, 373.0], [58.1, 373.0], [58.2, 374.0], [58.3, 374.0], [58.4, 375.0], [58.5, 375.0], [58.6, 375.0], [58.7, 375.0], [58.8, 376.0], [58.9, 376.0], [59.0, 377.0], [59.1, 377.0], [59.2, 377.0], [59.3, 378.0], [59.4, 378.0], [59.5, 379.0], [59.6, 379.0], [59.7, 380.0], [59.8, 380.0], [59.9, 382.0], [60.0, 382.0], [60.1, 383.0], [60.2, 383.0], [60.3, 384.0], [60.4, 384.0], [60.5, 384.0], [60.6, 384.0], [60.7, 387.0], [60.8, 387.0], [60.9, 387.0], [61.0, 388.0], [61.1, 388.0], [61.2, 389.0], [61.3, 389.0], [61.4, 389.0], [61.5, 389.0], [61.6, 390.0], [61.7, 390.0], [61.8, 391.0], [61.9, 391.0], [62.0, 393.0], [62.1, 393.0], [62.2, 393.0], [62.3, 393.0], [62.4, 393.0], [62.5, 393.0], [62.6, 393.0], [62.7, 395.0], [62.8, 395.0], [62.9, 396.0], [63.0, 396.0], [63.1, 397.0], [63.2, 397.0], [63.3, 397.0], [63.4, 397.0], [63.5, 398.0], [63.6, 398.0], [63.7, 398.0], [63.8, 398.0], [63.9, 398.0], [64.0, 399.0], [64.1, 399.0], [64.2, 402.0], [64.3, 402.0], [64.4, 402.0], [64.5, 402.0], [64.6, 404.0], [64.7, 404.0], [64.8, 404.0], [64.9, 404.0], [65.0, 406.0], [65.1, 406.0], [65.2, 408.0], [65.3, 408.0], [65.4, 408.0], [65.5, 409.0], [65.6, 409.0], [65.7, 411.0], [65.8, 411.0], [65.9, 412.0], [66.0, 412.0], [66.1, 412.0], [66.2, 412.0], [66.3, 413.0], [66.4, 413.0], [66.5, 413.0], [66.6, 413.0], [66.7, 414.0], [66.8, 415.0], [66.9, 415.0], [67.0, 415.0], [67.1, 415.0], [67.2, 416.0], [67.3, 416.0], [67.4, 417.0], [67.5, 417.0], [67.6, 418.0], [67.7, 418.0], [67.8, 419.0], [67.9, 419.0], [68.0, 421.0], [68.1, 421.0], [68.2, 421.0], [68.3, 424.0], [68.4, 424.0], [68.5, 425.0], [68.6, 425.0], [68.7, 426.0], [68.8, 426.0], [68.9, 428.0], [69.0, 428.0], [69.1, 428.0], [69.2, 428.0], [69.3, 428.0], [69.4, 428.0], [69.5, 430.0], [69.6, 430.0], [69.7, 430.0], [69.8, 430.0], [69.9, 430.0], [70.0, 430.0], [70.1, 430.0], [70.2, 432.0], [70.3, 432.0], [70.4, 432.0], [70.5, 432.0], [70.6, 432.0], [70.7, 432.0], [70.8, 432.0], [70.9, 432.0], [71.0, 433.0], [71.1, 433.0], [71.2, 433.0], [71.3, 433.0], [71.4, 433.0], [71.5, 435.0], [71.6, 435.0], [71.7, 435.0], [71.8, 435.0], [71.9, 435.0], [72.0, 435.0], [72.1, 438.0], [72.2, 438.0], [72.3, 439.0], [72.4, 439.0], [72.5, 439.0], [72.6, 439.0], [72.7, 440.0], [72.8, 441.0], [72.9, 441.0], [73.0, 443.0], [73.1, 443.0], [73.2, 443.0], [73.3, 443.0], [73.4, 443.0], [73.5, 443.0], [73.6, 444.0], [73.7, 444.0], [73.8, 445.0], [73.9, 445.0], [74.0, 445.0], [74.1, 445.0], [74.2, 446.0], [74.3, 447.0], [74.4, 447.0], [74.5, 447.0], [74.6, 447.0], [74.7, 448.0], [74.8, 448.0], [74.9, 450.0], [75.0, 450.0], [75.1, 451.0], [75.2, 451.0], [75.3, 451.0], [75.4, 451.0], [75.5, 453.0], [75.6, 453.0], [75.7, 454.0], [75.8, 455.0], [75.9, 455.0], [76.0, 456.0], [76.1, 456.0], [76.2, 456.0], [76.3, 456.0], [76.4, 456.0], [76.5, 456.0], [76.6, 456.0], [76.7, 456.0], [76.8, 457.0], [76.9, 457.0], [77.0, 457.0], [77.1, 457.0], [77.2, 458.0], [77.3, 459.0], [77.4, 459.0], [77.5, 463.0], [77.6, 463.0], [77.7, 463.0], [77.8, 463.0], [77.9, 463.0], [78.0, 463.0], [78.1, 464.0], [78.2, 464.0], [78.3, 465.0], [78.4, 465.0], [78.5, 466.0], [78.6, 466.0], [78.7, 467.0], [78.8, 468.0], [78.9, 468.0], [79.0, 469.0], [79.1, 469.0], [79.2, 473.0], [79.3, 473.0], [79.4, 476.0], [79.5, 476.0], [79.6, 480.0], [79.7, 480.0], [79.8, 482.0], [79.9, 482.0], [80.0, 483.0], [80.1, 483.0], [80.2, 483.0], [80.3, 483.0], [80.4, 483.0], [80.5, 483.0], [80.6, 483.0], [80.7, 486.0], [80.8, 486.0], [80.9, 487.0], [81.0, 487.0], [81.1, 487.0], [81.2, 487.0], [81.3, 488.0], [81.4, 488.0], [81.5, 491.0], [81.6, 491.0], [81.7, 493.0], [81.8, 493.0], [81.9, 495.0], [82.0, 495.0], [82.1, 495.0], [82.2, 497.0], [82.3, 497.0], [82.4, 498.0], [82.5, 498.0], [82.6, 498.0], [82.7, 498.0], [82.8, 500.0], [82.9, 500.0], [83.0, 500.0], [83.1, 500.0], [83.2, 502.0], [83.3, 502.0], [83.4, 503.0], [83.5, 503.0], [83.6, 503.0], [83.7, 507.0], [83.8, 507.0], [83.9, 510.0], [84.0, 510.0], [84.1, 516.0], [84.2, 516.0], [84.3, 517.0], [84.4, 517.0], [84.5, 518.0], [84.6, 518.0], [84.7, 520.0], [84.8, 520.0], [84.9, 521.0], [85.0, 525.0], [85.1, 525.0], [85.2, 526.0], [85.3, 526.0], [85.4, 528.0], [85.5, 528.0], [85.6, 528.0], [85.7, 528.0], [85.8, 528.0], [85.9, 528.0], [86.0, 532.0], [86.1, 532.0], [86.2, 539.0], [86.3, 539.0], [86.4, 539.0], [86.5, 544.0], [86.6, 544.0], [86.7, 545.0], [86.8, 545.0], [86.9, 548.0], [87.0, 548.0], [87.1, 549.0], [87.2, 549.0], [87.3, 550.0], [87.4, 550.0], [87.5, 550.0], [87.6, 550.0], [87.7, 554.0], [87.8, 554.0], [87.9, 554.0], [88.0, 555.0], [88.1, 555.0], [88.2, 558.0], [88.3, 558.0], [88.4, 558.0], [88.5, 558.0], [88.6, 559.0], [88.7, 559.0], [88.8, 559.0], [88.9, 559.0], [89.0, 566.0], [89.1, 566.0], [89.2, 569.0], [89.3, 569.0], [89.4, 571.0], [89.5, 573.0], [89.6, 573.0], [89.7, 576.0], [89.8, 576.0], [89.9, 578.0], [90.0, 578.0], [90.1, 578.0], [90.2, 578.0], [90.3, 579.0], [90.4, 579.0], [90.5, 581.0], [90.6, 581.0], [90.7, 584.0], [90.8, 584.0], [90.9, 586.0], [91.0, 587.0], [91.1, 587.0], [91.2, 590.0], [91.3, 590.0], [91.4, 592.0], [91.5, 592.0], [91.6, 592.0], [91.7, 592.0], [91.8, 592.0], [91.9, 592.0], [92.0, 595.0], [92.1, 595.0], [92.2, 597.0], [92.3, 597.0], [92.4, 599.0], [92.5, 601.0], [92.6, 601.0], [92.7, 601.0], [92.8, 601.0], [92.9, 602.0], [93.0, 602.0], [93.1, 603.0], [93.2, 603.0], [93.3, 611.0], [93.4, 611.0], [93.5, 619.0], [93.6, 619.0], [93.7, 626.0], [93.8, 626.0], [93.9, 627.0], [94.0, 632.0], [94.1, 632.0], [94.2, 641.0], [94.3, 641.0], [94.4, 652.0], [94.5, 652.0], [94.6, 659.0], [94.7, 659.0], [94.8, 678.0], [94.9, 678.0], [95.0, 693.0], [95.1, 693.0], [95.2, 696.0], [95.3, 696.0], [95.4, 729.0], [95.5, 734.0], [95.6, 734.0], [95.7, 739.0], [95.8, 739.0], [95.9, 745.0], [96.0, 745.0], [96.1, 746.0], [96.2, 746.0], [96.3, 756.0], [96.4, 756.0], [96.5, 763.0], [96.6, 763.0], [96.7, 763.0], [96.8, 763.0], [96.9, 765.0], [97.0, 774.0], [97.1, 774.0], [97.2, 775.0], [97.3, 775.0], [97.4, 801.0], [97.5, 801.0], [97.6, 811.0], [97.7, 811.0], [97.8, 814.0], [97.9, 814.0], [98.0, 818.0], [98.1, 818.0], [98.2, 825.0], [98.3, 825.0], [98.4, 840.0], [98.5, 856.0], [98.6, 856.0], [98.7, 857.0], [98.8, 857.0], [98.9, 858.0], [99.0, 858.0], [99.1, 875.0], [99.2, 875.0], [99.3, 876.0], [99.4, 876.0], [99.5, 930.0], [99.6, 930.0], [99.7, 957.0], [99.8, 957.0], [99.9, 998.0]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 100.0, "maxY": 158.0, "series": [{"data": [[300.0, 132.0], [600.0, 15.0], [700.0, 11.0], [100.0, 52.0], [200.0, 158.0], [400.0, 99.0], [800.0, 11.0], [900.0, 3.0], [500.0, 52.0]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 90.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 443.0, "series": [{"data": [[0.0, 443.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 90.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.829268292682919, "minX": 1.77075012E12, "maxY": 9.829268292682919, "series": [{"data": [[1.77075012E12, 9.829268292682919]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77075012E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 164.5, "minX": 1.0, "maxY": 479.5, "series": [{"data": [[2.0, 263.0], [4.0, 164.5], [8.0, 479.5], [1.0, 421.0], [9.0, 306.8333333333333], [5.0, 248.0], [10.0, 371.845098039216], [3.0, 178.0], [6.0, 365.25], [7.0, 277.0]], "isOverall": false, "label": "/user/search", "isController": false}, {"data": [[9.829268292682919, 368.8799249530957]], "isOverall": false, "label": "/user/search-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1465.75, "minX": 1.77075012E12, "maxY": 1.3544221116666667E7, "series": [{"data": [[1.77075012E12, 1.3544221116666667E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77075012E12, 1465.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77075012E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 368.8799249530957, "minX": 1.77075012E12, "maxY": 368.8799249530957, "series": [{"data": [[1.77075012E12, 368.8799249530957]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77075012E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 353.0806754221388, "minX": 1.77075012E12, "maxY": 353.0806754221388, "series": [{"data": [[1.77075012E12, 353.0806754221388]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77075012E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.00938086303939962, "minX": 1.77075012E12, "maxY": 0.00938086303939962, "series": [{"data": [[1.77075012E12, 0.00938086303939962]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77075012E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 121.0, "minX": 1.77075012E12, "maxY": 998.0, "series": [{"data": [[1.77075012E12, 998.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77075012E12, 578.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77075012E12, 869.2199999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77075012E12, 693.8999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77075012E12, 121.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77075012E12, 335.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77075012E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 240.0, "minX": 10.0, "maxY": 380.5, "series": [{"data": [[10.0, 380.5], [25.0, 342.0], [26.0, 334.5], [27.0, 344.5], [28.0, 361.0], [29.0, 300.0], [15.0, 240.0], [31.0, 292.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 229.0, "minX": 10.0, "maxY": 362.0, "series": [{"data": [[10.0, 362.0], [25.0, 325.0], [26.0, 319.5], [27.0, 323.0], [28.0, 342.5], [29.0, 282.0], [15.0, 229.0], [31.0, 277.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.883333333333333, "minX": 1.77075012E12, "maxY": 8.883333333333333, "series": [{"data": [[1.77075012E12, 8.883333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77075012E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 8.883333333333333, "minX": 1.77075012E12, "maxY": 8.883333333333333, "series": [{"data": [[1.77075012E12, 8.883333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77075012E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 8.883333333333333, "minX": 1.77075012E12, "maxY": 8.883333333333333, "series": [{"data": [[1.77075012E12, 8.883333333333333]], "isOverall": false, "label": "/user/search-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77075012E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 8.883333333333333, "minX": 1.77075012E12, "maxY": 8.883333333333333, "series": [{"data": [[1.77075012E12, 8.883333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77075012E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

