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
        data: {"result": {"minY": 196.0, "minX": 0.0, "maxY": 7786.0, "series": [{"data": [[0.0, 196.0], [0.1, 196.0], [0.2, 199.0], [0.3, 199.0], [0.4, 265.0], [0.5, 266.0], [0.6, 266.0], [0.7, 304.0], [0.8, 304.0], [0.9, 314.0], [1.0, 390.0], [1.1, 390.0], [1.2, 419.0], [1.3, 419.0], [1.4, 420.0], [1.5, 425.0], [1.6, 425.0], [1.7, 448.0], [1.8, 448.0], [1.9, 470.0], [2.0, 475.0], [2.1, 475.0], [2.2, 493.0], [2.3, 493.0], [2.4, 503.0], [2.5, 570.0], [2.6, 570.0], [2.7, 593.0], [2.8, 593.0], [2.9, 617.0], [3.0, 637.0], [3.1, 637.0], [3.2, 665.0], [3.3, 665.0], [3.4, 667.0], [3.5, 670.0], [3.6, 670.0], [3.7, 713.0], [3.8, 713.0], [3.9, 754.0], [4.0, 773.0], [4.1, 773.0], [4.2, 806.0], [4.3, 806.0], [4.4, 866.0], [4.5, 866.0], [4.6, 866.0], [4.7, 974.0], [4.8, 974.0], [4.9, 984.0], [5.0, 987.0], [5.1, 987.0], [5.2, 1016.0], [5.3, 1022.0], [5.4, 1022.0], [5.5, 1033.0], [5.6, 1033.0], [5.7, 1065.0], [5.8, 1079.0], [5.9, 1079.0], [6.0, 1100.0], [6.1, 1100.0], [6.2, 1102.0], [6.3, 1121.0], [6.4, 1121.0], [6.5, 1157.0], [6.6, 1157.0], [6.7, 1300.0], [6.8, 1306.0], [6.9, 1306.0], [7.0, 1351.0], [7.1, 1351.0], [7.2, 1398.0], [7.3, 1417.0], [7.4, 1417.0], [7.5, 1430.0], [7.6, 1430.0], [7.7, 1446.0], [7.8, 1463.0], [7.9, 1463.0], [8.0, 1465.0], [8.1, 1465.0], [8.2, 1490.0], [8.3, 1501.0], [8.4, 1501.0], [8.5, 1510.0], [8.6, 1510.0], [8.7, 1579.0], [8.8, 1662.0], [8.9, 1662.0], [9.0, 1675.0], [9.1, 1675.0], [9.2, 1762.0], [9.3, 1775.0], [9.4, 1775.0], [9.5, 1802.0], [9.6, 1802.0], [9.7, 1814.0], [9.8, 1817.0], [9.9, 1817.0], [10.0, 1825.0], [10.1, 1852.0], [10.2, 1852.0], [10.3, 1855.0], [10.4, 1855.0], [10.5, 1899.0], [10.6, 1910.0], [10.7, 1910.0], [10.8, 1925.0], [10.9, 1925.0], [11.0, 1929.0], [11.1, 1990.0], [11.2, 1990.0], [11.3, 2037.0], [11.4, 2037.0], [11.5, 2088.0], [11.6, 2121.0], [11.7, 2121.0], [11.8, 2185.0], [11.9, 2185.0], [12.0, 2217.0], [12.1, 2232.0], [12.2, 2232.0], [12.3, 2235.0], [12.4, 2235.0], [12.5, 2242.0], [12.6, 2259.0], [12.7, 2259.0], [12.8, 2348.0], [12.9, 2348.0], [13.0, 2367.0], [13.1, 2372.0], [13.2, 2372.0], [13.3, 2464.0], [13.4, 2464.0], [13.5, 2479.0], [13.6, 2482.0], [13.7, 2482.0], [13.8, 2513.0], [13.9, 2513.0], [14.0, 2517.0], [14.1, 2521.0], [14.2, 2521.0], [14.3, 2544.0], [14.4, 2544.0], [14.5, 2557.0], [14.6, 2618.0], [14.7, 2618.0], [14.8, 2682.0], [14.9, 2682.0], [15.0, 2687.0], [15.1, 2705.0], [15.2, 2705.0], [15.3, 2807.0], [15.4, 2837.0], [15.5, 2837.0], [15.6, 2839.0], [15.7, 2839.0], [15.8, 2844.0], [15.9, 2855.0], [16.0, 2855.0], [16.1, 2920.0], [16.2, 2920.0], [16.3, 2970.0], [16.4, 3004.0], [16.5, 3004.0], [16.6, 3046.0], [16.7, 3046.0], [16.8, 3063.0], [16.9, 3202.0], [17.0, 3202.0], [17.1, 3214.0], [17.2, 3214.0], [17.3, 3278.0], [17.4, 3345.0], [17.5, 3345.0], [17.6, 3351.0], [17.7, 3351.0], [17.8, 3356.0], [17.9, 3368.0], [18.0, 3368.0], [18.1, 3405.0], [18.2, 3405.0], [18.3, 3444.0], [18.4, 3473.0], [18.5, 3473.0], [18.6, 3486.0], [18.7, 3486.0], [18.8, 3496.0], [18.9, 3502.0], [19.0, 3502.0], [19.1, 3504.0], [19.2, 3504.0], [19.3, 3505.0], [19.4, 3521.0], [19.5, 3521.0], [19.6, 3535.0], [19.7, 3535.0], [19.8, 3542.0], [19.9, 3558.0], [20.0, 3558.0], [20.1, 3569.0], [20.2, 3570.0], [20.3, 3570.0], [20.4, 3571.0], [20.5, 3571.0], [20.6, 3575.0], [20.7, 3577.0], [20.8, 3577.0], [20.9, 3578.0], [21.0, 3578.0], [21.1, 3580.0], [21.2, 3582.0], [21.3, 3582.0], [21.4, 3588.0], [21.5, 3588.0], [21.6, 3589.0], [21.7, 3595.0], [21.8, 3595.0], [21.9, 3598.0], [22.0, 3598.0], [22.1, 3598.0], [22.2, 3607.0], [22.3, 3607.0], [22.4, 3607.0], [22.5, 3607.0], [22.6, 3608.0], [22.7, 3610.0], [22.8, 3610.0], [22.9, 3611.0], [23.0, 3611.0], [23.1, 3612.0], [23.2, 3620.0], [23.3, 3620.0], [23.4, 3629.0], [23.5, 3629.0], [23.6, 3631.0], [23.7, 3647.0], [23.8, 3647.0], [23.9, 3651.0], [24.0, 3651.0], [24.1, 3651.0], [24.2, 3652.0], [24.3, 3652.0], [24.4, 3659.0], [24.5, 3659.0], [24.6, 3661.0], [24.7, 3671.0], [24.8, 3671.0], [24.9, 3681.0], [25.0, 3683.0], [25.1, 3683.0], [25.2, 3688.0], [25.3, 3688.0], [25.4, 3689.0], [25.5, 3695.0], [25.6, 3695.0], [25.7, 3700.0], [25.8, 3700.0], [25.9, 3701.0], [26.0, 3703.0], [26.1, 3703.0], [26.2, 3705.0], [26.3, 3705.0], [26.4, 3706.0], [26.5, 3706.0], [26.6, 3706.0], [26.7, 3707.0], [26.8, 3707.0], [26.9, 3712.0], [27.0, 3715.0], [27.1, 3715.0], [27.2, 3722.0], [27.3, 3722.0], [27.4, 3722.0], [27.5, 3723.0], [27.6, 3723.0], [27.7, 3724.0], [27.8, 3724.0], [27.9, 3726.0], [28.0, 3727.0], [28.1, 3727.0], [28.2, 3728.0], [28.3, 3728.0], [28.4, 3732.0], [28.5, 3734.0], [28.6, 3734.0], [28.7, 3734.0], [28.8, 3734.0], [28.9, 3736.0], [29.0, 3736.0], [29.1, 3736.0], [29.2, 3737.0], [29.3, 3737.0], [29.4, 3738.0], [29.5, 3739.0], [29.6, 3739.0], [29.7, 3739.0], [29.8, 3739.0], [29.9, 3740.0], [30.0, 3740.0], [30.1, 3740.0], [30.2, 3741.0], [30.3, 3744.0], [30.4, 3744.0], [30.5, 3745.0], [30.6, 3745.0], [30.7, 3748.0], [30.8, 3750.0], [30.9, 3750.0], [31.0, 3752.0], [31.1, 3752.0], [31.2, 3754.0], [31.3, 3755.0], [31.4, 3755.0], [31.5, 3755.0], [31.6, 3755.0], [31.7, 3757.0], [31.8, 3757.0], [31.9, 3757.0], [32.0, 3757.0], [32.1, 3757.0], [32.2, 3757.0], [32.3, 3760.0], [32.4, 3760.0], [32.5, 3761.0], [32.6, 3761.0], [32.7, 3762.0], [32.8, 3763.0], [32.9, 3763.0], [33.0, 3764.0], [33.1, 3764.0], [33.2, 3764.0], [33.3, 3767.0], [33.4, 3767.0], [33.5, 3769.0], [33.6, 3769.0], [33.7, 3771.0], [33.8, 3771.0], [33.9, 3771.0], [34.0, 3773.0], [34.1, 3773.0], [34.2, 3776.0], [34.3, 3777.0], [34.4, 3777.0], [34.5, 3777.0], [34.6, 3777.0], [34.7, 3778.0], [34.8, 3779.0], [34.9, 3779.0], [35.0, 3779.0], [35.1, 3781.0], [35.2, 3781.0], [35.3, 3783.0], [35.4, 3783.0], [35.5, 3785.0], [35.6, 3787.0], [35.7, 3787.0], [35.8, 3790.0], [35.9, 3790.0], [36.0, 3791.0], [36.1, 3791.0], [36.2, 3791.0], [36.3, 3795.0], [36.4, 3795.0], [36.5, 3796.0], [36.6, 3801.0], [36.7, 3801.0], [36.8, 3803.0], [36.9, 3803.0], [37.0, 3804.0], [37.1, 3806.0], [37.2, 3806.0], [37.3, 3807.0], [37.4, 3807.0], [37.5, 3808.0], [37.6, 3809.0], [37.7, 3809.0], [37.8, 3810.0], [37.9, 3810.0], [38.0, 3811.0], [38.1, 3811.0], [38.2, 3811.0], [38.3, 3812.0], [38.4, 3812.0], [38.5, 3812.0], [38.6, 3812.0], [38.7, 3812.0], [38.8, 3816.0], [38.9, 3816.0], [39.0, 3817.0], [39.1, 3818.0], [39.2, 3818.0], [39.3, 3819.0], [39.4, 3819.0], [39.5, 3820.0], [39.6, 3820.0], [39.7, 3820.0], [39.8, 3821.0], [39.9, 3821.0], [40.0, 3821.0], [40.1, 3822.0], [40.2, 3822.0], [40.3, 3823.0], [40.4, 3824.0], [40.5, 3824.0], [40.6, 3824.0], [40.7, 3824.0], [40.8, 3825.0], [40.9, 3826.0], [41.0, 3826.0], [41.1, 3829.0], [41.2, 3829.0], [41.3, 3829.0], [41.4, 3829.0], [41.5, 3829.0], [41.6, 3832.0], [41.7, 3832.0], [41.8, 3833.0], [41.9, 3833.0], [42.0, 3833.0], [42.1, 3835.0], [42.2, 3835.0], [42.3, 3838.0], [42.4, 3838.0], [42.5, 3838.0], [42.6, 3839.0], [42.7, 3839.0], [42.8, 3841.0], [42.9, 3842.0], [43.0, 3842.0], [43.1, 3842.0], [43.2, 3842.0], [43.3, 3844.0], [43.4, 3844.0], [43.5, 3844.0], [43.6, 3845.0], [43.7, 3845.0], [43.8, 3847.0], [43.9, 3853.0], [44.0, 3853.0], [44.1, 3853.0], [44.2, 3853.0], [44.3, 3857.0], [44.4, 3857.0], [44.5, 3857.0], [44.6, 3857.0], [44.7, 3857.0], [44.8, 3858.0], [44.9, 3858.0], [45.0, 3858.0], [45.1, 3859.0], [45.2, 3860.0], [45.3, 3860.0], [45.4, 3861.0], [45.5, 3861.0], [45.6, 3862.0], [45.7, 3863.0], [45.8, 3863.0], [45.9, 3864.0], [46.0, 3864.0], [46.1, 3864.0], [46.2, 3868.0], [46.3, 3868.0], [46.4, 3872.0], [46.5, 3872.0], [46.6, 3873.0], [46.7, 3874.0], [46.8, 3874.0], [46.9, 3875.0], [47.0, 3875.0], [47.1, 3875.0], [47.2, 3876.0], [47.3, 3876.0], [47.4, 3876.0], [47.5, 3876.0], [47.6, 3877.0], [47.7, 3879.0], [47.8, 3879.0], [47.9, 3879.0], [48.0, 3879.0], [48.1, 3880.0], [48.2, 3880.0], [48.3, 3880.0], [48.4, 3881.0], [48.5, 3881.0], [48.6, 3881.0], [48.7, 3881.0], [48.8, 3881.0], [48.9, 3886.0], [49.0, 3886.0], [49.1, 3887.0], [49.2, 3888.0], [49.3, 3888.0], [49.4, 3888.0], [49.5, 3888.0], [49.6, 3889.0], [49.7, 3890.0], [49.8, 3890.0], [49.9, 3890.0], [50.0, 3890.0], [50.1, 3891.0], [50.2, 3894.0], [50.3, 3894.0], [50.4, 3894.0], [50.5, 3895.0], [50.6, 3895.0], [50.7, 3896.0], [50.8, 3896.0], [50.9, 3897.0], [51.0, 3899.0], [51.1, 3899.0], [51.2, 3899.0], [51.3, 3899.0], [51.4, 3899.0], [51.5, 3900.0], [51.6, 3900.0], [51.7, 3902.0], [51.8, 3902.0], [51.9, 3903.0], [52.0, 3904.0], [52.1, 3904.0], [52.2, 3905.0], [52.3, 3905.0], [52.4, 3905.0], [52.5, 3906.0], [52.6, 3906.0], [52.7, 3907.0], [52.8, 3907.0], [52.9, 3908.0], [53.0, 3909.0], [53.1, 3909.0], [53.2, 3909.0], [53.3, 3909.0], [53.4, 3910.0], [53.5, 3910.0], [53.6, 3910.0], [53.7, 3910.0], [53.8, 3910.0], [53.9, 3911.0], [54.0, 3914.0], [54.1, 3914.0], [54.2, 3914.0], [54.3, 3914.0], [54.4, 3915.0], [54.5, 3915.0], [54.6, 3915.0], [54.7, 3916.0], [54.8, 3916.0], [54.9, 3916.0], [55.0, 3917.0], [55.1, 3917.0], [55.2, 3917.0], [55.3, 3917.0], [55.4, 3917.0], [55.5, 3918.0], [55.6, 3918.0], [55.7, 3919.0], [55.8, 3920.0], [55.9, 3920.0], [56.0, 3920.0], [56.1, 3920.0], [56.2, 3921.0], [56.3, 3921.0], [56.4, 3921.0], [56.5, 3922.0], [56.6, 3922.0], [56.7, 3924.0], [56.8, 3924.0], [56.9, 3924.0], [57.0, 3926.0], [57.1, 3926.0], [57.2, 3927.0], [57.3, 3927.0], [57.4, 3927.0], [57.5, 3929.0], [57.6, 3929.0], [57.7, 3929.0], [57.8, 3931.0], [57.9, 3931.0], [58.0, 3931.0], [58.1, 3931.0], [58.2, 3931.0], [58.3, 3933.0], [58.4, 3933.0], [58.5, 3934.0], [58.6, 3934.0], [58.7, 3935.0], [58.8, 3936.0], [58.9, 3936.0], [59.0, 3936.0], [59.1, 3936.0], [59.2, 3937.0], [59.3, 3938.0], [59.4, 3938.0], [59.5, 3938.0], [59.6, 3938.0], [59.7, 3939.0], [59.8, 3941.0], [59.9, 3941.0], [60.0, 3942.0], [60.1, 3943.0], [60.2, 3943.0], [60.3, 3945.0], [60.4, 3945.0], [60.5, 3946.0], [60.6, 3948.0], [60.7, 3948.0], [60.8, 3950.0], [60.9, 3950.0], [61.0, 3951.0], [61.1, 3951.0], [61.2, 3951.0], [61.3, 3955.0], [61.4, 3955.0], [61.5, 3955.0], [61.6, 3955.0], [61.7, 3955.0], [61.8, 3956.0], [61.9, 3956.0], [62.0, 3956.0], [62.1, 3959.0], [62.2, 3959.0], [62.3, 3959.0], [62.4, 3959.0], [62.5, 3960.0], [62.6, 3960.0], [62.7, 3960.0], [62.8, 3961.0], [62.9, 3961.0], [63.0, 3962.0], [63.1, 3962.0], [63.2, 3962.0], [63.3, 3962.0], [63.4, 3962.0], [63.5, 3962.0], [63.6, 3963.0], [63.7, 3963.0], [63.8, 3964.0], [63.9, 3964.0], [64.0, 3965.0], [64.1, 3965.0], [64.2, 3965.0], [64.3, 3966.0], [64.4, 3966.0], [64.5, 3967.0], [64.6, 3970.0], [64.7, 3970.0], [64.8, 3975.0], [64.9, 3975.0], [65.0, 3975.0], [65.1, 3977.0], [65.2, 3977.0], [65.3, 3979.0], [65.4, 3980.0], [65.5, 3980.0], [65.6, 3982.0], [65.7, 3982.0], [65.8, 3985.0], [65.9, 3986.0], [66.0, 3986.0], [66.1, 3987.0], [66.2, 3987.0], [66.3, 3990.0], [66.4, 3991.0], [66.5, 3991.0], [66.6, 3993.0], [66.7, 3993.0], [66.8, 3997.0], [66.9, 3997.0], [67.0, 3997.0], [67.1, 3999.0], [67.2, 3999.0], [67.3, 3999.0], [67.4, 4000.0], [67.5, 4000.0], [67.6, 4000.0], [67.7, 4000.0], [67.8, 4001.0], [67.9, 4003.0], [68.0, 4003.0], [68.1, 4004.0], [68.2, 4004.0], [68.3, 4005.0], [68.4, 4006.0], [68.5, 4006.0], [68.6, 4008.0], [68.7, 4008.0], [68.8, 4008.0], [68.9, 4009.0], [69.0, 4009.0], [69.1, 4009.0], [69.2, 4009.0], [69.3, 4010.0], [69.4, 4013.0], [69.5, 4013.0], [69.6, 4013.0], [69.7, 4013.0], [69.8, 4013.0], [69.9, 4014.0], [70.0, 4014.0], [70.1, 4015.0], [70.2, 4016.0], [70.3, 4016.0], [70.4, 4017.0], [70.5, 4017.0], [70.6, 4018.0], [70.7, 4019.0], [70.8, 4019.0], [70.9, 4019.0], [71.0, 4019.0], [71.1, 4021.0], [71.2, 4021.0], [71.3, 4021.0], [71.4, 4022.0], [71.5, 4022.0], [71.6, 4027.0], [71.7, 4028.0], [71.8, 4028.0], [71.9, 4029.0], [72.0, 4029.0], [72.1, 4029.0], [72.2, 4030.0], [72.3, 4030.0], [72.4, 4030.0], [72.5, 4030.0], [72.6, 4040.0], [72.7, 4040.0], [72.8, 4040.0], [72.9, 4041.0], [73.0, 4041.0], [73.1, 4042.0], [73.2, 4044.0], [73.3, 4044.0], [73.4, 4044.0], [73.5, 4044.0], [73.6, 4045.0], [73.7, 4048.0], [73.8, 4048.0], [73.9, 4049.0], [74.0, 4049.0], [74.1, 4051.0], [74.2, 4052.0], [74.3, 4052.0], [74.4, 4054.0], [74.5, 4054.0], [74.6, 4058.0], [74.7, 4059.0], [74.8, 4059.0], [74.9, 4061.0], [75.0, 4063.0], [75.1, 4063.0], [75.2, 4064.0], [75.3, 4064.0], [75.4, 4066.0], [75.5, 4067.0], [75.6, 4067.0], [75.7, 4071.0], [75.8, 4071.0], [75.9, 4072.0], [76.0, 4073.0], [76.1, 4073.0], [76.2, 4074.0], [76.3, 4074.0], [76.4, 4074.0], [76.5, 4080.0], [76.6, 4080.0], [76.7, 4081.0], [76.8, 4081.0], [76.9, 4083.0], [77.0, 4087.0], [77.1, 4087.0], [77.2, 4088.0], [77.3, 4088.0], [77.4, 4090.0], [77.5, 4091.0], [77.6, 4091.0], [77.7, 4092.0], [77.8, 4092.0], [77.9, 4093.0], [78.0, 4094.0], [78.1, 4094.0], [78.2, 4097.0], [78.3, 4097.0], [78.4, 4098.0], [78.5, 4099.0], [78.6, 4099.0], [78.7, 4101.0], [78.8, 4101.0], [78.9, 4103.0], [79.0, 4106.0], [79.1, 4106.0], [79.2, 4108.0], [79.3, 4108.0], [79.4, 4113.0], [79.5, 4114.0], [79.6, 4114.0], [79.7, 4115.0], [79.8, 4115.0], [79.9, 4116.0], [80.0, 4119.0], [80.1, 4119.0], [80.2, 4120.0], [80.3, 4124.0], [80.4, 4124.0], [80.5, 4124.0], [80.6, 4124.0], [80.7, 4125.0], [80.8, 4125.0], [80.9, 4125.0], [81.0, 4129.0], [81.1, 4129.0], [81.2, 4129.0], [81.3, 4129.0], [81.4, 4129.0], [81.5, 4130.0], [81.6, 4130.0], [81.7, 4130.0], [81.8, 4133.0], [81.9, 4133.0], [82.0, 4134.0], [82.1, 4134.0], [82.2, 4135.0], [82.3, 4136.0], [82.4, 4136.0], [82.5, 4136.0], [82.6, 4136.0], [82.7, 4139.0], [82.8, 4139.0], [82.9, 4139.0], [83.0, 4142.0], [83.1, 4142.0], [83.2, 4143.0], [83.3, 4144.0], [83.4, 4144.0], [83.5, 4144.0], [83.6, 4144.0], [83.7, 4145.0], [83.8, 4146.0], [83.9, 4146.0], [84.0, 4148.0], [84.1, 4148.0], [84.2, 4149.0], [84.3, 4151.0], [84.4, 4151.0], [84.5, 4152.0], [84.6, 4152.0], [84.7, 4152.0], [84.8, 4154.0], [84.9, 4154.0], [85.0, 4156.0], [85.1, 4158.0], [85.2, 4158.0], [85.3, 4159.0], [85.4, 4159.0], [85.5, 4164.0], [85.6, 4164.0], [85.7, 4164.0], [85.8, 4165.0], [85.9, 4165.0], [86.0, 4167.0], [86.1, 4171.0], [86.2, 4171.0], [86.3, 4171.0], [86.4, 4171.0], [86.5, 4173.0], [86.6, 4174.0], [86.7, 4174.0], [86.8, 4174.0], [86.9, 4174.0], [87.0, 4180.0], [87.1, 4183.0], [87.2, 4183.0], [87.3, 4184.0], [87.4, 4184.0], [87.5, 4186.0], [87.6, 4186.0], [87.7, 4186.0], [87.8, 4188.0], [87.9, 4188.0], [88.0, 4191.0], [88.1, 4203.0], [88.2, 4203.0], [88.3, 4204.0], [88.4, 4204.0], [88.5, 4204.0], [88.6, 4204.0], [88.7, 4204.0], [88.8, 4206.0], [88.9, 4206.0], [89.0, 4207.0], [89.1, 4208.0], [89.2, 4208.0], [89.3, 4212.0], [89.4, 4212.0], [89.5, 4216.0], [89.6, 4217.0], [89.7, 4217.0], [89.8, 4219.0], [89.9, 4219.0], [90.0, 4220.0], [90.1, 4220.0], [90.2, 4220.0], [90.3, 4223.0], [90.4, 4224.0], [90.5, 4224.0], [90.6, 4229.0], [90.7, 4229.0], [90.8, 4236.0], [90.9, 4241.0], [91.0, 4241.0], [91.1, 4243.0], [91.2, 4243.0], [91.3, 4244.0], [91.4, 4250.0], [91.5, 4250.0], [91.6, 4251.0], [91.7, 4251.0], [91.8, 4251.0], [91.9, 4256.0], [92.0, 4256.0], [92.1, 4256.0], [92.2, 4256.0], [92.3, 4261.0], [92.4, 4262.0], [92.5, 4262.0], [92.6, 4263.0], [92.7, 4263.0], [92.8, 4264.0], [92.9, 4265.0], [93.0, 4265.0], [93.1, 4271.0], [93.2, 4271.0], [93.3, 4273.0], [93.4, 4274.0], [93.5, 4274.0], [93.6, 4284.0], [93.7, 4284.0], [93.8, 4284.0], [93.9, 4288.0], [94.0, 4288.0], [94.1, 4293.0], [94.2, 4293.0], [94.3, 4294.0], [94.4, 4299.0], [94.5, 4299.0], [94.6, 4300.0], [94.7, 4300.0], [94.8, 4300.0], [94.9, 4304.0], [95.0, 4304.0], [95.1, 4318.0], [95.2, 4325.0], [95.3, 4325.0], [95.4, 4326.0], [95.5, 4326.0], [95.6, 4327.0], [95.7, 4338.0], [95.8, 4338.0], [95.9, 4338.0], [96.0, 4338.0], [96.1, 4354.0], [96.2, 4362.0], [96.3, 4362.0], [96.4, 4366.0], [96.5, 4366.0], [96.6, 4369.0], [96.7, 4403.0], [96.8, 4403.0], [96.9, 4410.0], [97.0, 4410.0], [97.1, 4413.0], [97.2, 4427.0], [97.3, 4427.0], [97.4, 4442.0], [97.5, 4442.0], [97.6, 4465.0], [97.7, 4473.0], [97.8, 4473.0], [97.9, 4527.0], [98.0, 4527.0], [98.1, 4538.0], [98.2, 4555.0], [98.3, 4555.0], [98.4, 4571.0], [98.5, 4571.0], [98.6, 4596.0], [98.7, 4602.0], [98.8, 4602.0], [98.9, 4625.0], [99.0, 4625.0], [99.1, 7277.0], [99.2, 7349.0], [99.3, 7349.0], [99.4, 7370.0], [99.5, 7370.0], [99.6, 7406.0], [99.7, 7582.0], [99.8, 7582.0], [99.9, 7786.0]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 96.0, "series": [{"data": [[600.0, 5.0], [700.0, 3.0], [800.0, 3.0], [900.0, 3.0], [1000.0, 5.0], [1100.0, 4.0], [1300.0, 4.0], [1400.0, 6.0], [1500.0, 3.0], [1600.0, 2.0], [1700.0, 2.0], [1800.0, 7.0], [1900.0, 4.0], [2000.0, 2.0], [2100.0, 2.0], [2200.0, 5.0], [2300.0, 3.0], [2400.0, 3.0], [2500.0, 5.0], [2600.0, 3.0], [2700.0, 1.0], [2800.0, 5.0], [2900.0, 2.0], [3000.0, 3.0], [3200.0, 3.0], [3300.0, 4.0], [3400.0, 5.0], [3500.0, 20.0], [3600.0, 21.0], [3700.0, 66.0], [3800.0, 90.0], [3900.0, 96.0], [4000.0, 68.0], [4100.0, 57.0], [4200.0, 39.0], [4300.0, 13.0], [4500.0, 5.0], [4400.0, 7.0], [4600.0, 2.0], [7400.0, 1.0], [7300.0, 2.0], [7200.0, 1.0], [7500.0, 1.0], [7700.0, 1.0], [100.0, 2.0], [200.0, 2.0], [300.0, 3.0], [400.0, 7.0], [500.0, 3.0]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 14.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 554.0, "series": [{"data": [[0.0, 14.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 36.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [[2.0, 554.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 90.53973509933776, "minX": 1.77074976E12, "maxY": 90.53973509933776, "series": [{"data": [[1.77074976E12, 90.53973509933776]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77074976E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1783.3333333333333, "minX": 1.0, "maxY": 7582.0, "series": [{"data": [[2.0, 4099.0], [3.0, 4003.0], [4.0, 4204.0], [5.0, 4006.0], [6.0, 4042.0], [7.0, 4413.0], [8.0, 4098.0], [9.0, 4602.0], [10.0, 4338.0], [11.0, 4119.0], [13.0, 3910.5], [14.0, 3875.0], [15.0, 3917.0], [16.0, 3857.0], [17.0, 4251.0], [18.0, 3812.0], [19.0, 4263.0], [20.0, 2109.0], [21.0, 2109.0], [22.0, 4625.0], [23.0, 4151.0], [24.0, 4058.0], [25.0, 4262.0], [26.0, 3990.0], [27.0, 4555.0], [28.0, 4045.0], [29.0, 4338.0], [30.0, 7582.0], [31.0, 4173.0], [33.0, 4369.0], [32.0, 4049.0], [35.0, 2202.0], [34.0, 4251.0], [37.0, 7349.0], [36.0, 3993.0], [38.0, 2244.5], [39.0, 3965.0], [40.0, 2254.0], [41.0, 4294.0], [43.0, 4142.0], [42.0, 4052.0], [45.0, 3896.0], [44.0, 4206.0], [47.0, 2272.5], [46.0, 4273.0], [49.0, 2264.0], [48.0, 4293.0], [51.0, 7277.0], [50.0, 4186.0], [53.0, 3935.0], [52.0, 4136.0], [55.0, 4236.0], [54.0, 4207.0], [56.0, 2192.5], [57.0, 2294.5], [59.0, 4212.0], [58.0, 3902.0], [61.0, 2349.5], [60.0, 4125.0], [63.0, 2908.0], [67.0, 2348.0], [66.0, 4326.0], [65.0, 4596.0], [64.0, 3933.0], [71.0, 4016.0], [70.0, 3963.0], [69.0, 4090.5], [75.0, 2395.0], [74.0, 4154.0], [73.0, 4092.0], [72.0, 4241.0], [79.0, 2475.5], [78.0, 4116.0], [77.0, 4167.0], [76.0, 3955.0], [80.0, 1783.3333333333333], [82.0, 2318.0], [83.0, 3890.0], [81.0, 3817.0], [86.0, 2262.0], [87.0, 3997.0], [85.0, 3926.0], [84.0, 3922.0], [91.0, 3946.0], [90.0, 3899.0], [89.0, 3905.0], [88.0, 3936.0], [95.0, 4040.0], [94.0, 4030.0], [93.0, 3757.0], [92.0, 3942.0], [97.0, 2282.0], [99.0, 3659.0], [98.0, 3874.0], [96.0, 3847.0], [100.0, 3576.2551440329244], [1.0, 4066.0]], "isOverall": false, "label": "/user/search", "isController": false}, {"data": [[90.53973509933776, 3579.3344370860946]], "isOverall": false, "label": "/user/search-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1661.0, "minX": 1.77074976E12, "maxY": 1.5934882866666667E7, "series": [{"data": [[1.77074976E12, 1.5934882866666667E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77074976E12, 1661.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77074976E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3579.3344370860946, "minX": 1.77074976E12, "maxY": 3579.3344370860946, "series": [{"data": [[1.77074976E12, 3579.3344370860946]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77074976E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3555.9602649006606, "minX": 1.77074976E12, "maxY": 3555.9602649006606, "series": [{"data": [[1.77074976E12, 3555.9602649006606]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77074976E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.10099337748344377, "minX": 1.77074976E12, "maxY": 0.10099337748344377, "series": [{"data": [[1.77074976E12, 0.10099337748344377]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77074976E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 196.0, "minX": 1.77074976E12, "maxY": 7786.0, "series": [{"data": [[1.77074976E12, 7786.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77074976E12, 4220.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77074976E12, 7144.400000000121]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77074976E12, 4314.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77074976E12, 196.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77074976E12, 3890.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77074976E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 367.0, "minX": 10.0, "maxY": 4082.0, "series": [{"data": [[10.0, 367.0], [22.0, 3348.0], [23.0, 3931.0], [24.0, 3971.0], [25.0, 3938.0], [26.0, 3822.0], [27.0, 3909.5], [28.0, 2480.5], [14.0, 4082.0], [30.0, 3845.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 353.5, "minX": 10.0, "maxY": 4072.0, "series": [{"data": [[10.0, 353.5], [22.0, 3307.5], [23.0, 3905.0], [24.0, 3948.5], [25.0, 3916.0], [26.0, 3801.0], [27.0, 3889.0], [28.0, 2458.0], [14.0, 4072.0], [30.0, 3827.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.066666666666666, "minX": 1.77074976E12, "maxY": 10.066666666666666, "series": [{"data": [[1.77074976E12, 10.066666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77074976E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.066666666666666, "minX": 1.77074976E12, "maxY": 10.066666666666666, "series": [{"data": [[1.77074976E12, 10.066666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77074976E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.066666666666666, "minX": 1.77074976E12, "maxY": 10.066666666666666, "series": [{"data": [[1.77074976E12, 10.066666666666666]], "isOverall": false, "label": "/user/search-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77074976E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.066666666666666, "minX": 1.77074976E12, "maxY": 10.066666666666666, "series": [{"data": [[1.77074976E12, 10.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77074976E12, "title": "Total Transactions Per Second"}},
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

