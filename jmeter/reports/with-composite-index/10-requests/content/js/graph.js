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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 678.0, "series": [{"data": [[0.0, 28.0], [0.1, 32.0], [0.2, 34.0], [0.3, 35.0], [0.4, 37.0], [0.5, 37.0], [0.6, 37.0], [0.7, 38.0], [0.8, 38.0], [0.9, 39.0], [1.0, 39.0], [1.1, 40.0], [1.2, 40.0], [1.3, 40.0], [1.4, 40.0], [1.5, 41.0], [1.6, 41.0], [1.7, 41.0], [1.8, 43.0], [1.9, 43.0], [2.0, 43.0], [2.1, 43.0], [2.2, 43.0], [2.3, 44.0], [2.4, 44.0], [2.5, 45.0], [2.6, 45.0], [2.7, 45.0], [2.8, 45.0], [2.9, 46.0], [3.0, 47.0], [3.1, 47.0], [3.2, 48.0], [3.3, 49.0], [3.4, 49.0], [3.5, 49.0], [3.6, 49.0], [3.7, 50.0], [3.8, 50.0], [3.9, 50.0], [4.0, 50.0], [4.1, 52.0], [4.2, 52.0], [4.3, 53.0], [4.4, 55.0], [4.5, 55.0], [4.6, 55.0], [4.7, 55.0], [4.8, 55.0], [4.9, 55.0], [5.0, 56.0], [5.1, 56.0], [5.2, 57.0], [5.3, 57.0], [5.4, 57.0], [5.5, 58.0], [5.6, 58.0], [5.7, 58.0], [5.8, 59.0], [5.9, 59.0], [6.0, 59.0], [6.1, 59.0], [6.2, 60.0], [6.3, 60.0], [6.4, 60.0], [6.5, 60.0], [6.6, 60.0], [6.7, 61.0], [6.8, 61.0], [6.9, 61.0], [7.0, 62.0], [7.1, 62.0], [7.2, 62.0], [7.3, 62.0], [7.4, 63.0], [7.5, 64.0], [7.6, 64.0], [7.7, 64.0], [7.8, 65.0], [7.9, 65.0], [8.0, 65.0], [8.1, 65.0], [8.2, 65.0], [8.3, 66.0], [8.4, 66.0], [8.5, 66.0], [8.6, 66.0], [8.7, 66.0], [8.8, 66.0], [8.9, 66.0], [9.0, 67.0], [9.1, 67.0], [9.2, 68.0], [9.3, 68.0], [9.4, 68.0], [9.5, 69.0], [9.6, 69.0], [9.7, 69.0], [9.8, 69.0], [9.9, 69.0], [10.0, 69.0], [10.1, 69.0], [10.2, 69.0], [10.3, 70.0], [10.4, 70.0], [10.5, 70.0], [10.6, 71.0], [10.7, 71.0], [10.8, 71.0], [10.9, 71.0], [11.0, 71.0], [11.1, 71.0], [11.2, 71.0], [11.3, 71.0], [11.4, 72.0], [11.5, 72.0], [11.6, 72.0], [11.7, 72.0], [11.8, 72.0], [11.9, 72.0], [12.0, 72.0], [12.1, 72.0], [12.2, 72.0], [12.3, 73.0], [12.4, 73.0], [12.5, 73.0], [12.6, 73.0], [12.7, 73.0], [12.8, 73.0], [12.9, 73.0], [13.0, 73.0], [13.1, 73.0], [13.2, 74.0], [13.3, 74.0], [13.4, 74.0], [13.5, 74.0], [13.6, 74.0], [13.7, 74.0], [13.8, 75.0], [13.9, 75.0], [14.0, 76.0], [14.1, 76.0], [14.2, 76.0], [14.3, 76.0], [14.4, 76.0], [14.5, 76.0], [14.6, 76.0], [14.7, 76.0], [14.8, 77.0], [14.9, 77.0], [15.0, 77.0], [15.1, 77.0], [15.2, 77.0], [15.3, 77.0], [15.4, 77.0], [15.5, 77.0], [15.6, 78.0], [15.7, 78.0], [15.8, 78.0], [15.9, 78.0], [16.0, 78.0], [16.1, 78.0], [16.2, 79.0], [16.3, 79.0], [16.4, 79.0], [16.5, 79.0], [16.6, 79.0], [16.7, 79.0], [16.8, 79.0], [16.9, 79.0], [17.0, 79.0], [17.1, 80.0], [17.2, 80.0], [17.3, 80.0], [17.4, 80.0], [17.5, 80.0], [17.6, 80.0], [17.7, 80.0], [17.8, 80.0], [17.9, 80.0], [18.0, 80.0], [18.1, 81.0], [18.2, 81.0], [18.3, 81.0], [18.4, 81.0], [18.5, 81.0], [18.6, 81.0], [18.7, 81.0], [18.8, 82.0], [18.9, 82.0], [19.0, 82.0], [19.1, 82.0], [19.2, 82.0], [19.3, 82.0], [19.4, 82.0], [19.5, 82.0], [19.6, 82.0], [19.7, 82.0], [19.8, 82.0], [19.9, 83.0], [20.0, 83.0], [20.1, 83.0], [20.2, 83.0], [20.3, 83.0], [20.4, 83.0], [20.5, 83.0], [20.6, 83.0], [20.7, 84.0], [20.8, 84.0], [20.9, 84.0], [21.0, 84.0], [21.1, 84.0], [21.2, 84.0], [21.3, 84.0], [21.4, 84.0], [21.5, 84.0], [21.6, 85.0], [21.7, 85.0], [21.8, 85.0], [21.9, 85.0], [22.0, 85.0], [22.1, 85.0], [22.2, 85.0], [22.3, 85.0], [22.4, 85.0], [22.5, 85.0], [22.6, 86.0], [22.7, 86.0], [22.8, 86.0], [22.9, 86.0], [23.0, 86.0], [23.1, 86.0], [23.2, 86.0], [23.3, 87.0], [23.4, 87.0], [23.5, 87.0], [23.6, 87.0], [23.7, 87.0], [23.8, 87.0], [23.9, 88.0], [24.0, 88.0], [24.1, 88.0], [24.2, 88.0], [24.3, 89.0], [24.4, 89.0], [24.5, 89.0], [24.6, 89.0], [24.7, 89.0], [24.8, 89.0], [24.9, 89.0], [25.0, 90.0], [25.1, 90.0], [25.2, 90.0], [25.3, 90.0], [25.4, 90.0], [25.5, 90.0], [25.6, 91.0], [25.7, 91.0], [25.8, 92.0], [25.9, 92.0], [26.0, 92.0], [26.1, 92.0], [26.2, 92.0], [26.3, 93.0], [26.4, 93.0], [26.5, 93.0], [26.6, 93.0], [26.7, 93.0], [26.8, 93.0], [26.9, 93.0], [27.0, 93.0], [27.1, 94.0], [27.2, 94.0], [27.3, 94.0], [27.4, 94.0], [27.5, 94.0], [27.6, 94.0], [27.7, 94.0], [27.8, 95.0], [27.9, 95.0], [28.0, 95.0], [28.1, 95.0], [28.2, 96.0], [28.3, 96.0], [28.4, 96.0], [28.5, 96.0], [28.6, 96.0], [28.7, 96.0], [28.8, 97.0], [28.9, 97.0], [29.0, 97.0], [29.1, 98.0], [29.2, 98.0], [29.3, 98.0], [29.4, 99.0], [29.5, 99.0], [29.6, 99.0], [29.7, 99.0], [29.8, 99.0], [29.9, 99.0], [30.0, 100.0], [30.1, 100.0], [30.2, 101.0], [30.3, 101.0], [30.4, 101.0], [30.5, 102.0], [30.6, 102.0], [30.7, 102.0], [30.8, 102.0], [30.9, 102.0], [31.0, 102.0], [31.1, 103.0], [31.2, 103.0], [31.3, 103.0], [31.4, 103.0], [31.5, 103.0], [31.6, 103.0], [31.7, 104.0], [31.8, 104.0], [31.9, 104.0], [32.0, 104.0], [32.1, 104.0], [32.2, 105.0], [32.3, 105.0], [32.4, 105.0], [32.5, 105.0], [32.6, 105.0], [32.7, 106.0], [32.8, 106.0], [32.9, 106.0], [33.0, 106.0], [33.1, 106.0], [33.2, 107.0], [33.3, 107.0], [33.4, 107.0], [33.5, 107.0], [33.6, 108.0], [33.7, 108.0], [33.8, 108.0], [33.9, 109.0], [34.0, 109.0], [34.1, 109.0], [34.2, 109.0], [34.3, 109.0], [34.4, 109.0], [34.5, 109.0], [34.6, 110.0], [34.7, 110.0], [34.8, 110.0], [34.9, 110.0], [35.0, 110.0], [35.1, 110.0], [35.2, 110.0], [35.3, 111.0], [35.4, 111.0], [35.5, 111.0], [35.6, 111.0], [35.7, 111.0], [35.8, 111.0], [35.9, 111.0], [36.0, 111.0], [36.1, 112.0], [36.2, 112.0], [36.3, 112.0], [36.4, 113.0], [36.5, 113.0], [36.6, 113.0], [36.7, 114.0], [36.8, 114.0], [36.9, 114.0], [37.0, 115.0], [37.1, 116.0], [37.2, 116.0], [37.3, 116.0], [37.4, 116.0], [37.5, 116.0], [37.6, 116.0], [37.7, 116.0], [37.8, 116.0], [37.9, 116.0], [38.0, 117.0], [38.1, 118.0], [38.2, 118.0], [38.3, 118.0], [38.4, 119.0], [38.5, 119.0], [38.6, 119.0], [38.7, 119.0], [38.8, 120.0], [38.9, 120.0], [39.0, 120.0], [39.1, 120.0], [39.2, 120.0], [39.3, 120.0], [39.4, 121.0], [39.5, 121.0], [39.6, 121.0], [39.7, 122.0], [39.8, 122.0], [39.9, 122.0], [40.0, 122.0], [40.1, 122.0], [40.2, 122.0], [40.3, 122.0], [40.4, 122.0], [40.5, 123.0], [40.6, 123.0], [40.7, 123.0], [40.8, 123.0], [40.9, 123.0], [41.0, 124.0], [41.1, 124.0], [41.2, 124.0], [41.3, 124.0], [41.4, 124.0], [41.5, 124.0], [41.6, 124.0], [41.7, 125.0], [41.8, 125.0], [41.9, 125.0], [42.0, 125.0], [42.1, 125.0], [42.2, 126.0], [42.3, 126.0], [42.4, 126.0], [42.5, 126.0], [42.6, 126.0], [42.7, 126.0], [42.8, 126.0], [42.9, 126.0], [43.0, 126.0], [43.1, 127.0], [43.2, 127.0], [43.3, 127.0], [43.4, 127.0], [43.5, 128.0], [43.6, 128.0], [43.7, 128.0], [43.8, 128.0], [43.9, 128.0], [44.0, 128.0], [44.1, 128.0], [44.2, 128.0], [44.3, 129.0], [44.4, 129.0], [44.5, 129.0], [44.6, 129.0], [44.7, 129.0], [44.8, 129.0], [44.9, 129.0], [45.0, 130.0], [45.1, 130.0], [45.2, 130.0], [45.3, 130.0], [45.4, 130.0], [45.5, 131.0], [45.6, 131.0], [45.7, 132.0], [45.8, 132.0], [45.9, 132.0], [46.0, 132.0], [46.1, 132.0], [46.2, 132.0], [46.3, 133.0], [46.4, 133.0], [46.5, 134.0], [46.6, 134.0], [46.7, 135.0], [46.8, 135.0], [46.9, 135.0], [47.0, 135.0], [47.1, 135.0], [47.2, 135.0], [47.3, 135.0], [47.4, 136.0], [47.5, 136.0], [47.6, 136.0], [47.7, 137.0], [47.8, 137.0], [47.9, 137.0], [48.0, 137.0], [48.1, 137.0], [48.2, 138.0], [48.3, 138.0], [48.4, 138.0], [48.5, 139.0], [48.6, 139.0], [48.7, 139.0], [48.8, 139.0], [48.9, 139.0], [49.0, 139.0], [49.1, 140.0], [49.2, 140.0], [49.3, 141.0], [49.4, 141.0], [49.5, 141.0], [49.6, 142.0], [49.7, 142.0], [49.8, 143.0], [49.9, 143.0], [50.0, 143.0], [50.1, 144.0], [50.2, 144.0], [50.3, 144.0], [50.4, 144.0], [50.5, 145.0], [50.6, 145.0], [50.7, 145.0], [50.8, 146.0], [50.9, 146.0], [51.0, 147.0], [51.1, 147.0], [51.2, 148.0], [51.3, 148.0], [51.4, 149.0], [51.5, 149.0], [51.6, 149.0], [51.7, 149.0], [51.8, 149.0], [51.9, 149.0], [52.0, 150.0], [52.1, 150.0], [52.2, 151.0], [52.3, 151.0], [52.4, 151.0], [52.5, 151.0], [52.6, 151.0], [52.7, 151.0], [52.8, 152.0], [52.9, 152.0], [53.0, 152.0], [53.1, 152.0], [53.2, 153.0], [53.3, 153.0], [53.4, 153.0], [53.5, 154.0], [53.6, 154.0], [53.7, 154.0], [53.8, 154.0], [53.9, 154.0], [54.0, 155.0], [54.1, 155.0], [54.2, 155.0], [54.3, 155.0], [54.4, 156.0], [54.5, 156.0], [54.6, 156.0], [54.7, 156.0], [54.8, 157.0], [54.9, 157.0], [55.0, 157.0], [55.1, 157.0], [55.2, 158.0], [55.3, 158.0], [55.4, 158.0], [55.5, 158.0], [55.6, 159.0], [55.7, 159.0], [55.8, 159.0], [55.9, 159.0], [56.0, 159.0], [56.1, 160.0], [56.2, 160.0], [56.3, 160.0], [56.4, 160.0], [56.5, 160.0], [56.6, 161.0], [56.7, 161.0], [56.8, 161.0], [56.9, 161.0], [57.0, 161.0], [57.1, 161.0], [57.2, 162.0], [57.3, 162.0], [57.4, 162.0], [57.5, 162.0], [57.6, 162.0], [57.7, 163.0], [57.8, 163.0], [57.9, 163.0], [58.0, 164.0], [58.1, 165.0], [58.2, 165.0], [58.3, 165.0], [58.4, 165.0], [58.5, 165.0], [58.6, 165.0], [58.7, 166.0], [58.8, 166.0], [58.9, 166.0], [59.0, 167.0], [59.1, 167.0], [59.2, 167.0], [59.3, 168.0], [59.4, 168.0], [59.5, 168.0], [59.6, 168.0], [59.7, 168.0], [59.8, 169.0], [59.9, 169.0], [60.0, 169.0], [60.1, 169.0], [60.2, 169.0], [60.3, 170.0], [60.4, 170.0], [60.5, 170.0], [60.6, 171.0], [60.7, 171.0], [60.8, 171.0], [60.9, 171.0], [61.0, 171.0], [61.1, 171.0], [61.2, 171.0], [61.3, 172.0], [61.4, 172.0], [61.5, 173.0], [61.6, 173.0], [61.7, 173.0], [61.8, 173.0], [61.9, 174.0], [62.0, 174.0], [62.1, 174.0], [62.2, 175.0], [62.3, 175.0], [62.4, 175.0], [62.5, 175.0], [62.6, 176.0], [62.7, 176.0], [62.8, 176.0], [62.9, 176.0], [63.0, 177.0], [63.1, 177.0], [63.2, 178.0], [63.3, 178.0], [63.4, 178.0], [63.5, 178.0], [63.6, 178.0], [63.7, 178.0], [63.8, 179.0], [63.9, 179.0], [64.0, 179.0], [64.1, 181.0], [64.2, 181.0], [64.3, 181.0], [64.4, 182.0], [64.5, 184.0], [64.6, 184.0], [64.7, 184.0], [64.8, 185.0], [64.9, 185.0], [65.0, 185.0], [65.1, 185.0], [65.2, 185.0], [65.3, 185.0], [65.4, 185.0], [65.5, 185.0], [65.6, 186.0], [65.7, 186.0], [65.8, 186.0], [65.9, 186.0], [66.0, 186.0], [66.1, 186.0], [66.2, 187.0], [66.3, 187.0], [66.4, 188.0], [66.5, 188.0], [66.6, 188.0], [66.7, 188.0], [66.8, 189.0], [66.9, 189.0], [67.0, 189.0], [67.1, 189.0], [67.2, 189.0], [67.3, 190.0], [67.4, 190.0], [67.5, 190.0], [67.6, 191.0], [67.7, 192.0], [67.8, 193.0], [67.9, 193.0], [68.0, 194.0], [68.1, 194.0], [68.2, 194.0], [68.3, 195.0], [68.4, 196.0], [68.5, 196.0], [68.6, 197.0], [68.7, 198.0], [68.8, 198.0], [68.9, 198.0], [69.0, 199.0], [69.1, 199.0], [69.2, 200.0], [69.3, 200.0], [69.4, 201.0], [69.5, 201.0], [69.6, 201.0], [69.7, 201.0], [69.8, 202.0], [69.9, 202.0], [70.0, 202.0], [70.1, 203.0], [70.2, 203.0], [70.3, 203.0], [70.4, 203.0], [70.5, 204.0], [70.6, 204.0], [70.7, 205.0], [70.8, 205.0], [70.9, 205.0], [71.0, 205.0], [71.1, 205.0], [71.2, 207.0], [71.3, 207.0], [71.4, 207.0], [71.5, 208.0], [71.6, 208.0], [71.7, 209.0], [71.8, 209.0], [71.9, 209.0], [72.0, 210.0], [72.1, 210.0], [72.2, 211.0], [72.3, 211.0], [72.4, 212.0], [72.5, 212.0], [72.6, 212.0], [72.7, 213.0], [72.8, 213.0], [72.9, 213.0], [73.0, 214.0], [73.1, 214.0], [73.2, 214.0], [73.3, 215.0], [73.4, 215.0], [73.5, 216.0], [73.6, 216.0], [73.7, 217.0], [73.8, 217.0], [73.9, 218.0], [74.0, 218.0], [74.1, 219.0], [74.2, 220.0], [74.3, 220.0], [74.4, 222.0], [74.5, 222.0], [74.6, 222.0], [74.7, 223.0], [74.8, 223.0], [74.9, 223.0], [75.0, 224.0], [75.1, 224.0], [75.2, 224.0], [75.3, 225.0], [75.4, 225.0], [75.5, 225.0], [75.6, 227.0], [75.7, 228.0], [75.8, 228.0], [75.9, 228.0], [76.0, 229.0], [76.1, 229.0], [76.2, 229.0], [76.3, 230.0], [76.4, 230.0], [76.5, 230.0], [76.6, 232.0], [76.7, 232.0], [76.8, 234.0], [76.9, 234.0], [77.0, 234.0], [77.1, 235.0], [77.2, 235.0], [77.3, 235.0], [77.4, 236.0], [77.5, 236.0], [77.6, 238.0], [77.7, 238.0], [77.8, 238.0], [77.9, 238.0], [78.0, 239.0], [78.1, 239.0], [78.2, 239.0], [78.3, 240.0], [78.4, 240.0], [78.5, 242.0], [78.6, 243.0], [78.7, 243.0], [78.8, 243.0], [78.9, 243.0], [79.0, 243.0], [79.1, 245.0], [79.2, 245.0], [79.3, 245.0], [79.4, 246.0], [79.5, 246.0], [79.6, 246.0], [79.7, 246.0], [79.8, 247.0], [79.9, 247.0], [80.0, 247.0], [80.1, 247.0], [80.2, 248.0], [80.3, 249.0], [80.4, 250.0], [80.5, 250.0], [80.6, 251.0], [80.7, 252.0], [80.8, 252.0], [80.9, 252.0], [81.0, 253.0], [81.1, 254.0], [81.2, 254.0], [81.3, 254.0], [81.4, 255.0], [81.5, 255.0], [81.6, 255.0], [81.7, 256.0], [81.8, 256.0], [81.9, 259.0], [82.0, 259.0], [82.1, 263.0], [82.2, 263.0], [82.3, 263.0], [82.4, 265.0], [82.5, 266.0], [82.6, 266.0], [82.7, 266.0], [82.8, 266.0], [82.9, 267.0], [83.0, 267.0], [83.1, 268.0], [83.2, 268.0], [83.3, 269.0], [83.4, 270.0], [83.5, 272.0], [83.6, 272.0], [83.7, 273.0], [83.8, 273.0], [83.9, 276.0], [84.0, 277.0], [84.1, 277.0], [84.2, 277.0], [84.3, 278.0], [84.4, 281.0], [84.5, 282.0], [84.6, 283.0], [84.7, 284.0], [84.8, 289.0], [84.9, 289.0], [85.0, 289.0], [85.1, 290.0], [85.2, 292.0], [85.3, 292.0], [85.4, 293.0], [85.5, 294.0], [85.6, 297.0], [85.7, 299.0], [85.8, 300.0], [85.9, 301.0], [86.0, 305.0], [86.1, 308.0], [86.2, 309.0], [86.3, 310.0], [86.4, 310.0], [86.5, 314.0], [86.6, 314.0], [86.7, 316.0], [86.8, 316.0], [86.9, 316.0], [87.0, 317.0], [87.1, 318.0], [87.2, 318.0], [87.3, 320.0], [87.4, 324.0], [87.5, 325.0], [87.6, 326.0], [87.7, 326.0], [87.8, 327.0], [87.9, 329.0], [88.0, 330.0], [88.1, 330.0], [88.2, 332.0], [88.3, 332.0], [88.4, 333.0], [88.5, 333.0], [88.6, 337.0], [88.7, 339.0], [88.8, 339.0], [88.9, 340.0], [89.0, 340.0], [89.1, 341.0], [89.2, 343.0], [89.3, 343.0], [89.4, 343.0], [89.5, 344.0], [89.6, 344.0], [89.7, 345.0], [89.8, 347.0], [89.9, 347.0], [90.0, 347.0], [90.1, 348.0], [90.2, 348.0], [90.3, 349.0], [90.4, 349.0], [90.5, 350.0], [90.6, 352.0], [90.7, 353.0], [90.8, 353.0], [90.9, 353.0], [91.0, 356.0], [91.1, 356.0], [91.2, 357.0], [91.3, 358.0], [91.4, 358.0], [91.5, 361.0], [91.6, 362.0], [91.7, 363.0], [91.8, 363.0], [91.9, 364.0], [92.0, 365.0], [92.1, 366.0], [92.2, 367.0], [92.3, 369.0], [92.4, 370.0], [92.5, 371.0], [92.6, 372.0], [92.7, 374.0], [92.8, 374.0], [92.9, 375.0], [93.0, 376.0], [93.1, 376.0], [93.2, 379.0], [93.3, 380.0], [93.4, 382.0], [93.5, 383.0], [93.6, 384.0], [93.7, 385.0], [93.8, 385.0], [93.9, 386.0], [94.0, 389.0], [94.1, 390.0], [94.2, 392.0], [94.3, 394.0], [94.4, 395.0], [94.5, 397.0], [94.6, 400.0], [94.7, 400.0], [94.8, 401.0], [94.9, 405.0], [95.0, 408.0], [95.1, 410.0], [95.2, 412.0], [95.3, 412.0], [95.4, 414.0], [95.5, 414.0], [95.6, 416.0], [95.7, 421.0], [95.8, 423.0], [95.9, 425.0], [96.0, 427.0], [96.1, 427.0], [96.2, 441.0], [96.3, 443.0], [96.4, 446.0], [96.5, 452.0], [96.6, 454.0], [96.7, 455.0], [96.8, 459.0], [96.9, 471.0], [97.0, 471.0], [97.1, 472.0], [97.2, 474.0], [97.3, 474.0], [97.4, 476.0], [97.5, 479.0], [97.6, 480.0], [97.7, 480.0], [97.8, 491.0], [97.9, 492.0], [98.0, 503.0], [98.1, 508.0], [98.2, 512.0], [98.3, 534.0], [98.4, 536.0], [98.5, 543.0], [98.6, 547.0], [98.7, 554.0], [98.8, 554.0], [98.9, 558.0], [99.0, 561.0], [99.1, 565.0], [99.2, 577.0], [99.3, 583.0], [99.4, 591.0], [99.5, 600.0], [99.6, 614.0], [99.7, 625.0], [99.8, 636.0], [99.9, 645.0]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 438.0, "series": [{"data": [[0.0, 334.0], [300.0, 98.0], [600.0, 6.0], [100.0, 438.0], [200.0, 185.0], [400.0, 38.0], [500.0, 17.0]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 23.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 1093.0, "series": [{"data": [[0.0, 1093.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 23.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.877240143369187, "minX": 1.7707959E12, "maxY": 9.877240143369187, "series": [{"data": [[1.7707959E12, 9.877240143369187]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7707959E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 111.0, "minX": 1.0, "maxY": 269.0, "series": [{"data": [[2.0, 185.33333333333331], [4.0, 112.66666666666667], [8.0, 132.4], [1.0, 269.0], [9.0, 164.625], [5.0, 230.0], [10.0, 175.95462962962955], [6.0, 111.0], [3.0, 174.0], [7.0, 195.5]], "isOverall": false, "label": "/user/search", "isController": false}, {"data": [[9.877240143369187, 175.57795698924733]], "isOverall": false, "label": "/user/search-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3069.0, "minX": 1.7707959E12, "maxY": 2.8609422516666666E7, "series": [{"data": [[1.7707959E12, 2.8609422516666666E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7707959E12, 3069.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7707959E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 175.57795698924733, "minX": 1.7707959E12, "maxY": 175.57795698924733, "series": [{"data": [[1.7707959E12, 175.57795698924733]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7707959E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 159.7876344086021, "minX": 1.7707959E12, "maxY": 159.7876344086021, "series": [{"data": [[1.7707959E12, 159.7876344086021]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7707959E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.014336917562724013, "minX": 1.7707959E12, "maxY": 0.014336917562724013, "series": [{"data": [[1.7707959E12, 0.014336917562724013]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7707959E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.7707959E12, "maxY": 678.0, "series": [{"data": [[1.7707959E12, 678.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7707959E12, 347.30000000000007]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7707959E12, 564.3199999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7707959E12, 408.2999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7707959E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7707959E12, 143.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7707959E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 117.0, "minX": 1.0, "maxY": 269.0, "series": [{"data": [[2.0, 119.0], [39.0, 126.0], [44.0, 153.0], [47.0, 168.0], [51.0, 141.0], [50.0, 168.0], [52.0, 160.0], [53.0, 147.5], [54.0, 165.0], [55.0, 146.0], [58.0, 152.5], [59.0, 143.0], [61.0, 137.0], [60.0, 117.0], [62.0, 151.0], [63.0, 127.5], [64.0, 139.0], [1.0, 269.0], [70.0, 125.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 105.0, "minX": 1.0, "maxY": 249.0, "series": [{"data": [[2.0, 105.0], [39.0, 119.0], [44.0, 142.5], [47.0, 155.0], [51.0, 131.0], [50.0, 152.0], [52.0, 145.5], [53.0, 136.0], [54.0, 152.5], [55.0, 132.5], [58.0, 142.0], [59.0, 135.0], [61.0, 126.0], [60.0, 106.5], [62.0, 137.5], [63.0, 119.5], [64.0, 128.0], [1.0, 249.0], [70.0, 112.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 18.6, "minX": 1.7707959E12, "maxY": 18.6, "series": [{"data": [[1.7707959E12, 18.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7707959E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 18.6, "minX": 1.7707959E12, "maxY": 18.6, "series": [{"data": [[1.7707959E12, 18.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7707959E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 18.6, "minX": 1.7707959E12, "maxY": 18.6, "series": [{"data": [[1.7707959E12, 18.6]], "isOverall": false, "label": "/user/search-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7707959E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 18.6, "minX": 1.7707959E12, "maxY": 18.6, "series": [{"data": [[1.7707959E12, 18.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7707959E12, "title": "Total Transactions Per Second"}},
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

