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
        data: {"result": {"minY": 226.0, "minX": 0.0, "maxY": 7433.0, "series": [{"data": [[0.0, 226.0], [0.1, 226.0], [0.2, 268.0], [0.3, 268.0], [0.4, 284.0], [0.5, 367.0], [0.6, 367.0], [0.7, 372.0], [0.8, 372.0], [0.9, 395.0], [1.0, 417.0], [1.1, 417.0], [1.2, 453.0], [1.3, 453.0], [1.4, 471.0], [1.5, 485.0], [1.6, 485.0], [1.7, 486.0], [1.8, 487.0], [1.9, 487.0], [2.0, 509.0], [2.1, 509.0], [2.2, 549.0], [2.3, 564.0], [2.4, 564.0], [2.5, 574.0], [2.6, 574.0], [2.7, 648.0], [2.8, 666.0], [2.9, 666.0], [3.0, 673.0], [3.1, 691.0], [3.2, 691.0], [3.3, 703.0], [3.4, 703.0], [3.5, 778.0], [3.6, 790.0], [3.7, 790.0], [3.8, 906.0], [3.9, 906.0], [4.0, 911.0], [4.1, 913.0], [4.2, 913.0], [4.3, 930.0], [4.4, 951.0], [4.5, 951.0], [4.6, 951.0], [4.7, 951.0], [4.8, 991.0], [4.9, 1037.0], [5.0, 1037.0], [5.1, 1079.0], [5.2, 1079.0], [5.3, 1112.0], [5.4, 1127.0], [5.5, 1127.0], [5.6, 1155.0], [5.7, 1155.0], [5.8, 1157.0], [5.9, 1170.0], [6.0, 1170.0], [6.1, 1259.0], [6.2, 1282.0], [6.3, 1282.0], [6.4, 1308.0], [6.5, 1308.0], [6.6, 1339.0], [6.7, 1376.0], [6.8, 1376.0], [6.9, 1378.0], [7.0, 1378.0], [7.1, 1391.0], [7.2, 1414.0], [7.3, 1414.0], [7.4, 1414.0], [7.5, 1418.0], [7.6, 1418.0], [7.7, 1479.0], [7.8, 1479.0], [7.9, 1501.0], [8.0, 1523.0], [8.1, 1523.0], [8.2, 1525.0], [8.3, 1525.0], [8.4, 1556.0], [8.5, 1588.0], [8.6, 1588.0], [8.7, 1659.0], [8.8, 1717.0], [8.9, 1717.0], [9.0, 1753.0], [9.1, 1753.0], [9.2, 1823.0], [9.3, 1826.0], [9.4, 1826.0], [9.5, 1828.0], [9.6, 1828.0], [9.7, 1841.0], [9.8, 1873.0], [9.9, 1873.0], [10.0, 1880.0], [10.1, 1914.0], [10.2, 1914.0], [10.3, 1970.0], [10.4, 1970.0], [10.5, 1984.0], [10.6, 1989.0], [10.7, 1989.0], [10.8, 2006.0], [10.9, 2006.0], [11.0, 2056.0], [11.1, 2074.0], [11.2, 2074.0], [11.3, 2091.0], [11.4, 2091.0], [11.5, 2106.0], [11.6, 2166.0], [11.7, 2166.0], [11.8, 2231.0], [11.9, 2319.0], [12.0, 2319.0], [12.1, 2339.0], [12.2, 2339.0], [12.3, 2354.0], [12.4, 2359.0], [12.5, 2359.0], [12.6, 2396.0], [12.7, 2396.0], [12.8, 2431.0], [12.9, 2432.0], [13.0, 2432.0], [13.1, 2440.0], [13.2, 2503.0], [13.3, 2503.0], [13.4, 2511.0], [13.5, 2511.0], [13.6, 2525.0], [13.7, 2548.0], [13.8, 2548.0], [13.9, 2560.0], [14.0, 2560.0], [14.1, 2599.0], [14.2, 2616.0], [14.3, 2616.0], [14.4, 2641.0], [14.5, 2650.0], [14.6, 2650.0], [14.7, 2688.0], [14.8, 2688.0], [14.9, 2702.0], [15.0, 2734.0], [15.1, 2734.0], [15.2, 2793.0], [15.3, 2793.0], [15.4, 2847.0], [15.5, 2923.0], [15.6, 2923.0], [15.7, 2924.0], [15.8, 2926.0], [15.9, 2926.0], [16.0, 2989.0], [16.1, 2989.0], [16.2, 3081.0], [16.3, 3084.0], [16.4, 3084.0], [16.5, 3106.0], [16.6, 3106.0], [16.7, 3106.0], [16.8, 3109.0], [16.9, 3109.0], [17.0, 3127.0], [17.1, 3127.0], [17.2, 3154.0], [17.3, 3208.0], [17.4, 3208.0], [17.5, 3236.0], [17.6, 3337.0], [17.7, 3337.0], [17.8, 3350.0], [17.9, 3350.0], [18.0, 3352.0], [18.1, 3366.0], [18.2, 3366.0], [18.3, 3369.0], [18.4, 3369.0], [18.5, 3377.0], [18.6, 3378.0], [18.7, 3378.0], [18.8, 3388.0], [18.9, 3389.0], [19.0, 3389.0], [19.1, 3392.0], [19.2, 3392.0], [19.3, 3393.0], [19.4, 3400.0], [19.5, 3400.0], [19.6, 3401.0], [19.7, 3401.0], [19.8, 3401.0], [19.9, 3416.0], [20.0, 3416.0], [20.1, 3418.0], [20.2, 3418.0], [20.3, 3418.0], [20.4, 3436.0], [20.5, 3436.0], [20.6, 3436.0], [20.7, 3440.0], [20.8, 3440.0], [20.9, 3448.0], [21.0, 3448.0], [21.1, 3451.0], [21.2, 3454.0], [21.3, 3454.0], [21.4, 3456.0], [21.5, 3458.0], [21.6, 3458.0], [21.7, 3471.0], [21.8, 3471.0], [21.9, 3477.0], [22.0, 3478.0], [22.1, 3478.0], [22.2, 3480.0], [22.3, 3480.0], [22.4, 3487.0], [22.5, 3504.0], [22.6, 3504.0], [22.7, 3508.0], [22.8, 3508.0], [22.9, 3508.0], [23.0, 3510.0], [23.1, 3510.0], [23.2, 3513.0], [23.3, 3517.0], [23.4, 3517.0], [23.5, 3520.0], [23.6, 3520.0], [23.7, 3522.0], [23.8, 3523.0], [23.9, 3523.0], [24.0, 3525.0], [24.1, 3525.0], [24.2, 3526.0], [24.3, 3526.0], [24.4, 3526.0], [24.5, 3530.0], [24.6, 3530.0], [24.7, 3530.0], [24.8, 3533.0], [24.9, 3533.0], [25.0, 3536.0], [25.1, 3538.0], [25.2, 3538.0], [25.3, 3542.0], [25.4, 3542.0], [25.5, 3543.0], [25.6, 3544.0], [25.7, 3544.0], [25.8, 3547.0], [25.9, 3548.0], [26.0, 3548.0], [26.1, 3554.0], [26.2, 3554.0], [26.3, 3556.0], [26.4, 3562.0], [26.5, 3562.0], [26.6, 3564.0], [26.7, 3564.0], [26.8, 3571.0], [26.9, 3571.0], [27.0, 3571.0], [27.1, 3573.0], [27.2, 3573.0], [27.3, 3573.0], [27.4, 3579.0], [27.5, 3579.0], [27.6, 3581.0], [27.7, 3584.0], [27.8, 3584.0], [27.9, 3585.0], [28.0, 3585.0], [28.1, 3586.0], [28.2, 3586.0], [28.3, 3586.0], [28.4, 3599.0], [28.5, 3599.0], [28.6, 3606.0], [28.7, 3608.0], [28.8, 3608.0], [28.9, 3615.0], [29.0, 3619.0], [29.1, 3619.0], [29.2, 3622.0], [29.3, 3622.0], [29.4, 3624.0], [29.5, 3626.0], [29.6, 3626.0], [29.7, 3627.0], [29.8, 3627.0], [29.9, 3627.0], [30.0, 3630.0], [30.1, 3630.0], [30.2, 3632.0], [30.3, 3632.0], [30.4, 3632.0], [30.5, 3632.0], [30.6, 3632.0], [30.7, 3633.0], [30.8, 3635.0], [30.9, 3635.0], [31.0, 3639.0], [31.1, 3639.0], [31.2, 3639.0], [31.3, 3641.0], [31.4, 3641.0], [31.5, 3644.0], [31.6, 3645.0], [31.7, 3645.0], [31.8, 3645.0], [31.9, 3645.0], [32.0, 3649.0], [32.1, 3650.0], [32.2, 3650.0], [32.3, 3652.0], [32.4, 3652.0], [32.5, 3653.0], [32.6, 3656.0], [32.7, 3656.0], [32.8, 3656.0], [32.9, 3659.0], [33.0, 3659.0], [33.1, 3661.0], [33.2, 3661.0], [33.3, 3662.0], [33.4, 3664.0], [33.5, 3664.0], [33.6, 3664.0], [33.7, 3664.0], [33.8, 3666.0], [33.9, 3673.0], [34.0, 3673.0], [34.1, 3675.0], [34.2, 3675.0], [34.3, 3675.0], [34.4, 3676.0], [34.5, 3676.0], [34.6, 3678.0], [34.7, 3679.0], [34.8, 3679.0], [34.9, 3684.0], [35.0, 3684.0], [35.1, 3684.0], [35.2, 3685.0], [35.3, 3685.0], [35.4, 3687.0], [35.5, 3687.0], [35.6, 3689.0], [35.7, 3691.0], [35.8, 3691.0], [35.9, 3692.0], [36.0, 3693.0], [36.1, 3693.0], [36.2, 3694.0], [36.3, 3694.0], [36.4, 3695.0], [36.5, 3695.0], [36.6, 3695.0], [36.7, 3695.0], [36.8, 3695.0], [36.9, 3697.0], [37.0, 3697.0], [37.1, 3697.0], [37.2, 3702.0], [37.3, 3703.0], [37.4, 3703.0], [37.5, 3704.0], [37.6, 3704.0], [37.7, 3706.0], [37.8, 3709.0], [37.9, 3709.0], [38.0, 3715.0], [38.1, 3715.0], [38.2, 3716.0], [38.3, 3717.0], [38.4, 3717.0], [38.5, 3718.0], [38.6, 3723.0], [38.7, 3723.0], [38.8, 3723.0], [38.9, 3723.0], [39.0, 3724.0], [39.1, 3725.0], [39.2, 3725.0], [39.3, 3725.0], [39.4, 3725.0], [39.5, 3726.0], [39.6, 3727.0], [39.7, 3727.0], [39.8, 3730.0], [39.9, 3730.0], [40.0, 3731.0], [40.1, 3735.0], [40.2, 3735.0], [40.3, 3737.0], [40.4, 3737.0], [40.5, 3737.0], [40.6, 3737.0], [40.7, 3737.0], [40.8, 3739.0], [40.9, 3739.0], [41.0, 3739.0], [41.1, 3739.0], [41.2, 3739.0], [41.3, 3740.0], [41.4, 3742.0], [41.5, 3742.0], [41.6, 3743.0], [41.7, 3743.0], [41.8, 3743.0], [41.9, 3745.0], [42.0, 3745.0], [42.1, 3746.0], [42.2, 3746.0], [42.3, 3746.0], [42.4, 3746.0], [42.5, 3746.0], [42.6, 3747.0], [42.7, 3748.0], [42.8, 3748.0], [42.9, 3749.0], [43.0, 3749.0], [43.1, 3749.0], [43.2, 3750.0], [43.3, 3750.0], [43.4, 3751.0], [43.5, 3755.0], [43.6, 3755.0], [43.7, 3756.0], [43.8, 3756.0], [43.9, 3756.0], [44.0, 3756.0], [44.1, 3756.0], [44.2, 3757.0], [44.3, 3758.0], [44.4, 3758.0], [44.5, 3758.0], [44.6, 3758.0], [44.7, 3759.0], [44.8, 3760.0], [44.9, 3760.0], [45.0, 3760.0], [45.1, 3760.0], [45.2, 3761.0], [45.3, 3766.0], [45.4, 3766.0], [45.5, 3769.0], [45.6, 3769.0], [45.7, 3769.0], [45.8, 3770.0], [45.9, 3770.0], [46.0, 3770.0], [46.1, 3770.0], [46.2, 3770.0], [46.3, 3773.0], [46.4, 3773.0], [46.5, 3774.0], [46.6, 3776.0], [46.7, 3776.0], [46.8, 3778.0], [46.9, 3778.0], [47.0, 3781.0], [47.1, 3781.0], [47.2, 3781.0], [47.3, 3781.0], [47.4, 3781.0], [47.5, 3781.0], [47.6, 3782.0], [47.7, 3782.0], [47.8, 3782.0], [47.9, 3786.0], [48.0, 3786.0], [48.1, 3788.0], [48.2, 3788.0], [48.3, 3790.0], [48.4, 3791.0], [48.5, 3791.0], [48.6, 3794.0], [48.7, 3794.0], [48.8, 3794.0], [48.9, 3795.0], [49.0, 3795.0], [49.1, 3795.0], [49.2, 3795.0], [49.3, 3795.0], [49.4, 3796.0], [49.5, 3796.0], [49.6, 3797.0], [49.7, 3799.0], [49.8, 3799.0], [49.9, 3801.0], [50.0, 3803.0], [50.1, 3803.0], [50.2, 3804.0], [50.3, 3804.0], [50.4, 3804.0], [50.5, 3805.0], [50.6, 3805.0], [50.7, 3806.0], [50.8, 3806.0], [50.9, 3807.0], [51.0, 3807.0], [51.1, 3807.0], [51.2, 3811.0], [51.3, 3811.0], [51.4, 3811.0], [51.5, 3813.0], [51.6, 3813.0], [51.7, 3814.0], [51.8, 3816.0], [51.9, 3816.0], [52.0, 3816.0], [52.1, 3816.0], [52.2, 3817.0], [52.3, 3818.0], [52.4, 3818.0], [52.5, 3819.0], [52.6, 3819.0], [52.7, 3819.0], [52.8, 3820.0], [52.9, 3820.0], [53.0, 3820.0], [53.1, 3820.0], [53.2, 3820.0], [53.3, 3821.0], [53.4, 3821.0], [53.5, 3824.0], [53.6, 3826.0], [53.7, 3826.0], [53.8, 3826.0], [53.9, 3826.0], [54.0, 3827.0], [54.1, 3828.0], [54.2, 3828.0], [54.3, 3829.0], [54.4, 3830.0], [54.5, 3830.0], [54.6, 3831.0], [54.7, 3831.0], [54.8, 3832.0], [54.9, 3834.0], [55.0, 3834.0], [55.1, 3835.0], [55.2, 3835.0], [55.3, 3836.0], [55.4, 3837.0], [55.5, 3837.0], [55.6, 3838.0], [55.7, 3838.0], [55.8, 3838.0], [55.9, 3839.0], [56.0, 3839.0], [56.1, 3841.0], [56.2, 3841.0], [56.3, 3841.0], [56.4, 3842.0], [56.5, 3842.0], [56.6, 3842.0], [56.7, 3842.0], [56.8, 3842.0], [56.9, 3842.0], [57.0, 3842.0], [57.1, 3842.0], [57.2, 3843.0], [57.3, 3843.0], [57.4, 3843.0], [57.5, 3843.0], [57.6, 3843.0], [57.7, 3844.0], [57.8, 3844.0], [57.9, 3845.0], [58.0, 3849.0], [58.1, 3849.0], [58.2, 3850.0], [58.3, 3850.0], [58.4, 3851.0], [58.5, 3851.0], [58.6, 3851.0], [58.7, 3851.0], [58.8, 3855.0], [58.9, 3855.0], [59.0, 3855.0], [59.1, 3855.0], [59.2, 3855.0], [59.3, 3856.0], [59.4, 3856.0], [59.5, 3857.0], [59.6, 3857.0], [59.7, 3857.0], [59.8, 3859.0], [59.9, 3859.0], [60.0, 3859.0], [60.1, 3861.0], [60.2, 3861.0], [60.3, 3862.0], [60.4, 3862.0], [60.5, 3864.0], [60.6, 3864.0], [60.7, 3864.0], [60.8, 3865.0], [60.9, 3865.0], [61.0, 3866.0], [61.1, 3866.0], [61.2, 3866.0], [61.3, 3868.0], [61.4, 3868.0], [61.5, 3869.0], [61.6, 3870.0], [61.7, 3870.0], [61.8, 3870.0], [61.9, 3871.0], [62.0, 3871.0], [62.1, 3871.0], [62.2, 3871.0], [62.3, 3872.0], [62.4, 3873.0], [62.5, 3873.0], [62.6, 3874.0], [62.7, 3874.0], [62.8, 3874.0], [62.9, 3875.0], [63.0, 3875.0], [63.1, 3875.0], [63.2, 3877.0], [63.3, 3877.0], [63.4, 3880.0], [63.5, 3880.0], [63.6, 3881.0], [63.7, 3881.0], [63.8, 3881.0], [63.9, 3884.0], [64.0, 3884.0], [64.1, 3884.0], [64.2, 3884.0], [64.3, 3884.0], [64.4, 3885.0], [64.5, 3885.0], [64.6, 3885.0], [64.7, 3886.0], [64.8, 3886.0], [64.9, 3887.0], [65.0, 3889.0], [65.1, 3889.0], [65.2, 3890.0], [65.3, 3890.0], [65.4, 3892.0], [65.5, 3892.0], [65.6, 3892.0], [65.7, 3897.0], [65.8, 3897.0], [65.9, 3897.0], [66.0, 3900.0], [66.1, 3900.0], [66.2, 3901.0], [66.3, 3903.0], [66.4, 3903.0], [66.5, 3903.0], [66.6, 3903.0], [66.7, 3905.0], [66.8, 3907.0], [66.9, 3907.0], [67.0, 3908.0], [67.1, 3908.0], [67.2, 3909.0], [67.3, 3910.0], [67.4, 3910.0], [67.5, 3910.0], [67.6, 3911.0], [67.7, 3911.0], [67.8, 3912.0], [67.9, 3912.0], [68.0, 3914.0], [68.1, 3917.0], [68.2, 3917.0], [68.3, 3918.0], [68.4, 3918.0], [68.5, 3919.0], [68.6, 3919.0], [68.7, 3919.0], [68.8, 3919.0], [68.9, 3920.0], [69.0, 3920.0], [69.1, 3920.0], [69.2, 3920.0], [69.3, 3922.0], [69.4, 3922.0], [69.5, 3922.0], [69.6, 3924.0], [69.7, 3924.0], [69.8, 3925.0], [69.9, 3926.0], [70.0, 3926.0], [70.1, 3928.0], [70.2, 3928.0], [70.3, 3928.0], [70.4, 3931.0], [70.5, 3931.0], [70.6, 3932.0], [70.7, 3935.0], [70.8, 3935.0], [70.9, 3935.0], [71.0, 3935.0], [71.1, 3936.0], [71.2, 3937.0], [71.3, 3937.0], [71.4, 3937.0], [71.5, 3938.0], [71.6, 3938.0], [71.7, 3940.0], [71.8, 3940.0], [71.9, 3945.0], [72.0, 3948.0], [72.1, 3948.0], [72.2, 3949.0], [72.3, 3949.0], [72.4, 3950.0], [72.5, 3950.0], [72.6, 3950.0], [72.7, 3950.0], [72.8, 3950.0], [72.9, 3954.0], [73.0, 3955.0], [73.1, 3955.0], [73.2, 3956.0], [73.3, 3957.0], [73.4, 3957.0], [73.5, 3958.0], [73.6, 3958.0], [73.7, 3958.0], [73.8, 3959.0], [73.9, 3959.0], [74.0, 3961.0], [74.1, 3961.0], [74.2, 3961.0], [74.3, 3962.0], [74.4, 3962.0], [74.5, 3963.0], [74.6, 3964.0], [74.7, 3964.0], [74.8, 3964.0], [74.9, 3964.0], [75.0, 3967.0], [75.1, 3972.0], [75.2, 3972.0], [75.3, 3973.0], [75.4, 3973.0], [75.5, 3974.0], [75.6, 3974.0], [75.7, 3974.0], [75.8, 3977.0], [75.9, 3977.0], [76.0, 3977.0], [76.1, 3977.0], [76.2, 3977.0], [76.3, 3978.0], [76.4, 3981.0], [76.5, 3981.0], [76.6, 3982.0], [76.7, 3982.0], [76.8, 3982.0], [76.9, 3985.0], [77.0, 3985.0], [77.1, 3986.0], [77.2, 3986.0], [77.3, 3986.0], [77.4, 3988.0], [77.5, 3988.0], [77.6, 3990.0], [77.7, 3995.0], [77.8, 3995.0], [77.9, 3998.0], [78.0, 3998.0], [78.1, 4001.0], [78.2, 4002.0], [78.3, 4002.0], [78.4, 4002.0], [78.5, 4002.0], [78.6, 4006.0], [78.7, 4006.0], [78.8, 4006.0], [78.9, 4006.0], [79.0, 4008.0], [79.1, 4008.0], [79.2, 4008.0], [79.3, 4008.0], [79.4, 4008.0], [79.5, 4009.0], [79.6, 4009.0], [79.7, 4009.0], [79.8, 4009.0], [79.9, 4010.0], [80.0, 4012.0], [80.1, 4012.0], [80.2, 4012.0], [80.3, 4013.0], [80.4, 4013.0], [80.5, 4014.0], [80.6, 4014.0], [80.7, 4016.0], [80.8, 4016.0], [80.9, 4016.0], [81.0, 4019.0], [81.1, 4019.0], [81.2, 4020.0], [81.3, 4020.0], [81.4, 4020.0], [81.5, 4025.0], [81.6, 4025.0], [81.7, 4025.0], [81.8, 4028.0], [81.9, 4028.0], [82.0, 4033.0], [82.1, 4033.0], [82.2, 4033.0], [82.3, 4033.0], [82.4, 4033.0], [82.5, 4035.0], [82.6, 4035.0], [82.7, 4035.0], [82.8, 4037.0], [82.9, 4040.0], [83.0, 4040.0], [83.1, 4040.0], [83.2, 4040.0], [83.3, 4041.0], [83.4, 4044.0], [83.5, 4044.0], [83.6, 4049.0], [83.7, 4049.0], [83.8, 4049.0], [83.9, 4049.0], [84.0, 4049.0], [84.1, 4051.0], [84.2, 4051.0], [84.3, 4051.0], [84.4, 4053.0], [84.5, 4053.0], [84.6, 4055.0], [84.7, 4055.0], [84.8, 4055.0], [84.9, 4057.0], [85.0, 4057.0], [85.1, 4059.0], [85.2, 4061.0], [85.3, 4061.0], [85.4, 4062.0], [85.5, 4062.0], [85.6, 4062.0], [85.7, 4065.0], [85.8, 4065.0], [85.9, 4067.0], [86.0, 4069.0], [86.1, 4069.0], [86.2, 4071.0], [86.3, 4071.0], [86.4, 4073.0], [86.5, 4078.0], [86.6, 4078.0], [86.7, 4086.0], [86.8, 4086.0], [86.9, 4088.0], [87.0, 4090.0], [87.1, 4090.0], [87.2, 4090.0], [87.3, 4093.0], [87.4, 4093.0], [87.5, 4093.0], [87.6, 4093.0], [87.7, 4094.0], [87.8, 4097.0], [87.9, 4097.0], [88.0, 4098.0], [88.1, 4098.0], [88.2, 4101.0], [88.3, 4101.0], [88.4, 4101.0], [88.5, 4102.0], [88.6, 4102.0], [88.7, 4102.0], [88.8, 4105.0], [88.9, 4105.0], [89.0, 4106.0], [89.1, 4106.0], [89.2, 4106.0], [89.3, 4106.0], [89.4, 4106.0], [89.5, 4110.0], [89.6, 4111.0], [89.7, 4111.0], [89.8, 4114.0], [89.9, 4114.0], [90.0, 4114.0], [90.1, 4115.0], [90.2, 4115.0], [90.3, 4117.0], [90.4, 4117.0], [90.5, 4117.0], [90.6, 4120.0], [90.7, 4120.0], [90.8, 4121.0], [90.9, 4122.0], [91.0, 4122.0], [91.1, 4123.0], [91.2, 4123.0], [91.3, 4127.0], [91.4, 4128.0], [91.5, 4128.0], [91.6, 4132.0], [91.7, 4137.0], [91.8, 4137.0], [91.9, 4139.0], [92.0, 4139.0], [92.1, 4140.0], [92.2, 4142.0], [92.3, 4142.0], [92.4, 4145.0], [92.5, 4145.0], [92.6, 4149.0], [92.7, 4158.0], [92.8, 4158.0], [92.9, 4159.0], [93.0, 4165.0], [93.1, 4165.0], [93.2, 4168.0], [93.3, 4168.0], [93.4, 4174.0], [93.5, 4174.0], [93.6, 4174.0], [93.7, 4174.0], [93.8, 4174.0], [93.9, 4176.0], [94.0, 4197.0], [94.1, 4197.0], [94.2, 4203.0], [94.3, 4207.0], [94.4, 4207.0], [94.5, 4211.0], [94.6, 4211.0], [94.7, 4225.0], [94.8, 4227.0], [94.9, 4227.0], [95.0, 4230.0], [95.1, 4230.0], [95.2, 4254.0], [95.3, 4266.0], [95.4, 4266.0], [95.5, 4267.0], [95.6, 4267.0], [95.7, 4275.0], [95.8, 4275.0], [95.9, 4275.0], [96.0, 4278.0], [96.1, 4281.0], [96.2, 4281.0], [96.3, 4288.0], [96.4, 4288.0], [96.5, 4308.0], [96.6, 4329.0], [96.7, 4329.0], [96.8, 4332.0], [96.9, 4332.0], [97.0, 4335.0], [97.1, 4340.0], [97.2, 4340.0], [97.3, 4349.0], [97.4, 4368.0], [97.5, 4368.0], [97.6, 4382.0], [97.7, 4382.0], [97.8, 4399.0], [97.9, 4439.0], [98.0, 4439.0], [98.1, 4439.0], [98.2, 4439.0], [98.3, 4484.0], [98.4, 4497.0], [98.5, 4497.0], [98.6, 4502.0], [98.7, 4530.0], [98.8, 4530.0], [98.9, 4569.0], [99.0, 4569.0], [99.1, 4590.0], [99.2, 4627.0], [99.3, 4627.0], [99.4, 4696.0], [99.5, 4696.0], [99.6, 7086.0], [99.7, 7414.0], [99.8, 7414.0], [99.9, 7433.0]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 99.0, "series": [{"data": [[600.0, 4.0], [700.0, 3.0], [900.0, 7.0], [1000.0, 2.0], [1100.0, 5.0], [1200.0, 2.0], [1300.0, 5.0], [1400.0, 4.0], [1500.0, 5.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 6.0], [1900.0, 4.0], [2000.0, 4.0], [2100.0, 2.0], [2200.0, 1.0], [2300.0, 5.0], [2400.0, 3.0], [2500.0, 6.0], [2600.0, 4.0], [2700.0, 3.0], [2800.0, 1.0], [2900.0, 4.0], [3000.0, 2.0], [3100.0, 5.0], [200.0, 3.0], [3200.0, 2.0], [3300.0, 11.0], [3400.0, 19.0], [3500.0, 37.0], [3600.0, 53.0], [3700.0, 78.0], [3800.0, 99.0], [3900.0, 74.0], [4000.0, 62.0], [4100.0, 37.0], [4200.0, 14.0], [4300.0, 9.0], [4600.0, 2.0], [4400.0, 4.0], [4500.0, 4.0], [300.0, 3.0], [400.0, 6.0], [7000.0, 1.0], [7400.0, 2.0], [500.0, 4.0]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 566.0, "series": [{"data": [[0.0, 12.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 36.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [[2.0, 566.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 90.69543973941371, "minX": 1.77075018E12, "maxY": 90.69543973941371, "series": [{"data": [[1.77075018E12, 90.69543973941371]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77075018E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1507.6666666666667, "minX": 1.0, "maxY": 7433.0, "series": [{"data": [[2.0, 3938.0], [3.0, 3834.0], [4.0, 3766.0], [5.0, 3843.0], [6.0, 4012.0], [7.0, 3973.0], [8.0, 3928.0], [9.0, 4065.0], [10.0, 3892.0], [11.0, 4097.0], [12.0, 4051.0], [13.0, 3872.0], [14.0, 3917.0], [15.0, 7433.0], [17.0, 4113.0], [18.0, 4111.0], [19.0, 3843.0], [20.0, 4078.0], [21.0, 3935.0], [22.0, 4590.0], [23.0, 4278.0], [24.0, 2048.5], [25.0, 4149.0], [26.0, 4142.0], [27.0, 2158.5], [28.0, 3742.0], [29.0, 3749.0], [30.0, 3949.0], [31.0, 2133.0], [33.0, 4368.0], [32.0, 3781.0], [35.0, 4254.0], [34.0, 4025.0], [37.0, 4114.0], [36.0, 3884.0], [39.0, 3821.0], [38.0, 3862.0], [41.0, 2211.0], [40.0, 3903.0], [43.0, 3866.0], [42.0, 3829.0], [45.0, 3880.0], [44.0, 3978.0], [47.0, 4530.0], [46.0, 4340.0], [49.0, 3998.0], [48.0, 3770.0], [50.0, 1507.6666666666667], [51.0, 3935.0], [52.0, 1768.6666666666667], [53.0, 2307.0], [55.0, 3725.0], [54.0, 3723.0], [57.0, 1589.0], [56.0, 4117.0], [59.0, 4502.0], [58.0, 3755.0], [61.0, 4073.0], [60.0, 4013.0], [63.0, 4127.0], [62.0, 4120.0], [67.0, 3897.0], [66.0, 4484.0], [65.0, 4062.0], [64.0, 4067.0], [69.0, 2353.5], [71.0, 2246.0], [70.0, 4093.0], [68.0, 3982.0], [74.0, 2302.5], [75.0, 4012.0], [73.0, 4332.0], [72.0, 4019.0], [76.0, 2298.5], [79.0, 4281.0], [78.0, 3851.0], [77.0, 3864.0], [80.0, 2412.0], [83.0, 3937.0], [82.0, 3839.0], [81.0, 3986.0], [87.0, 3781.0], [86.0, 3905.0], [85.0, 4174.0], [84.0, 4020.0], [88.0, 2382.0], [90.0, 2371.0], [91.0, 4140.0], [89.0, 4049.0], [94.0, 2317.0], [95.0, 4627.0], [93.0, 4106.0], [92.0, 4329.0], [99.0, 3924.0], [98.0, 4086.0], [97.0, 4055.0], [96.0, 4049.0], [100.0, 3498.082661290321], [1.0, 4101.0]], "isOverall": false, "label": "/user/search", "isController": false}, {"data": [[90.69543973941371, 3495.902280130293]], "isOverall": false, "label": "/user/search-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1688.5, "minX": 1.77075018E12, "maxY": 1.6345369883333333E7, "series": [{"data": [[1.77075018E12, 1.6345369883333333E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77075018E12, 1688.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77075018E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3495.902280130293, "minX": 1.77075018E12, "maxY": 3495.902280130293, "series": [{"data": [[1.77075018E12, 3495.902280130293]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77075018E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3472.5342019543978, "minX": 1.77075018E12, "maxY": 3472.5342019543978, "series": [{"data": [[1.77075018E12, 3472.5342019543978]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77075018E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.09771986970684043, "minX": 1.77075018E12, "maxY": 0.09771986970684043, "series": [{"data": [[1.77075018E12, 0.09771986970684043]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77075018E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 226.0, "minX": 1.77075018E12, "maxY": 7433.0, "series": [{"data": [[1.77075018E12, 7433.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77075018E12, 4114.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77075018E12, 4586.85]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77075018E12, 4236.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77075018E12, 226.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77075018E12, 3802.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77075018E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2261.0, "minX": 21.0, "maxY": 4045.0, "series": [{"data": [[21.0, 3872.0], [22.0, 3859.5], [23.0, 3457.5], [24.0, 4045.0], [25.0, 3929.5], [26.0, 2261.0], [27.0, 3762.5], [28.0, 3840.5], [29.0, 3522.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2249.0, "minX": 21.0, "maxY": 4017.0, "series": [{"data": [[21.0, 3864.0], [22.0, 3848.5], [23.0, 3451.5], [24.0, 4017.0], [25.0, 3911.0], [26.0, 2249.0], [27.0, 3747.5], [28.0, 3816.5], [29.0, 3500.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.233333333333333, "minX": 1.77075018E12, "maxY": 10.233333333333333, "series": [{"data": [[1.77075018E12, 10.233333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77075018E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.233333333333333, "minX": 1.77075018E12, "maxY": 10.233333333333333, "series": [{"data": [[1.77075018E12, 10.233333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77075018E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.233333333333333, "minX": 1.77075018E12, "maxY": 10.233333333333333, "series": [{"data": [[1.77075018E12, 10.233333333333333]], "isOverall": false, "label": "/user/search-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77075018E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.233333333333333, "minX": 1.77075018E12, "maxY": 10.233333333333333, "series": [{"data": [[1.77075018E12, 10.233333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77075018E12, "title": "Total Transactions Per Second"}},
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

