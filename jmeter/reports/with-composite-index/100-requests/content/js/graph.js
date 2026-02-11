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
        data: {"result": {"minY": 38.0, "minX": 0.0, "maxY": 3314.0, "series": [{"data": [[0.0, 38.0], [0.1, 79.0], [0.2, 86.0], [0.3, 94.0], [0.4, 112.0], [0.5, 120.0], [0.6, 128.0], [0.7, 141.0], [0.8, 146.0], [0.9, 178.0], [1.0, 181.0], [1.1, 191.0], [1.2, 209.0], [1.3, 223.0], [1.4, 236.0], [1.5, 242.0], [1.6, 266.0], [1.7, 267.0], [1.8, 272.0], [1.9, 284.0], [2.0, 299.0], [2.1, 306.0], [2.2, 310.0], [2.3, 327.0], [2.4, 354.0], [2.5, 362.0], [2.6, 365.0], [2.7, 369.0], [2.8, 385.0], [2.9, 390.0], [3.0, 391.0], [3.1, 409.0], [3.2, 419.0], [3.3, 442.0], [3.4, 520.0], [3.5, 529.0], [3.6, 549.0], [3.7, 564.0], [3.8, 573.0], [3.9, 585.0], [4.0, 585.0], [4.1, 588.0], [4.2, 590.0], [4.3, 591.0], [4.4, 609.0], [4.5, 609.0], [4.6, 619.0], [4.7, 621.0], [4.8, 621.0], [4.9, 626.0], [5.0, 631.0], [5.1, 675.0], [5.2, 712.0], [5.3, 717.0], [5.4, 719.0], [5.5, 742.0], [5.6, 745.0], [5.7, 752.0], [5.8, 764.0], [5.9, 765.0], [6.0, 775.0], [6.1, 781.0], [6.2, 786.0], [6.3, 786.0], [6.4, 788.0], [6.5, 792.0], [6.6, 838.0], [6.7, 846.0], [6.8, 854.0], [6.9, 854.0], [7.0, 868.0], [7.1, 869.0], [7.2, 873.0], [7.3, 900.0], [7.4, 903.0], [7.5, 922.0], [7.6, 933.0], [7.7, 933.0], [7.8, 942.0], [7.9, 956.0], [8.0, 958.0], [8.1, 1005.0], [8.2, 1035.0], [8.3, 1042.0], [8.4, 1059.0], [8.5, 1080.0], [8.6, 1091.0], [8.7, 1110.0], [8.8, 1113.0], [8.9, 1130.0], [9.0, 1131.0], [9.1, 1143.0], [9.2, 1149.0], [9.3, 1164.0], [9.4, 1169.0], [9.5, 1170.0], [9.6, 1177.0], [9.7, 1187.0], [9.8, 1196.0], [9.9, 1223.0], [10.0, 1224.0], [10.1, 1229.0], [10.2, 1237.0], [10.3, 1248.0], [10.4, 1253.0], [10.5, 1263.0], [10.6, 1267.0], [10.7, 1271.0], [10.8, 1316.0], [10.9, 1325.0], [11.0, 1337.0], [11.1, 1359.0], [11.2, 1389.0], [11.3, 1412.0], [11.4, 1426.0], [11.5, 1434.0], [11.6, 1434.0], [11.7, 1441.0], [11.8, 1442.0], [11.9, 1443.0], [12.0, 1445.0], [12.1, 1446.0], [12.2, 1446.0], [12.3, 1448.0], [12.4, 1450.0], [12.5, 1452.0], [12.6, 1455.0], [12.7, 1456.0], [12.8, 1459.0], [12.9, 1459.0], [13.0, 1467.0], [13.1, 1468.0], [13.2, 1470.0], [13.3, 1472.0], [13.4, 1472.0], [13.5, 1472.0], [13.6, 1474.0], [13.7, 1476.0], [13.8, 1477.0], [13.9, 1478.0], [14.0, 1480.0], [14.1, 1481.0], [14.2, 1481.0], [14.3, 1483.0], [14.4, 1484.0], [14.5, 1485.0], [14.6, 1487.0], [14.7, 1488.0], [14.8, 1490.0], [14.9, 1490.0], [15.0, 1490.0], [15.1, 1493.0], [15.2, 1494.0], [15.3, 1495.0], [15.4, 1495.0], [15.5, 1498.0], [15.6, 1499.0], [15.7, 1500.0], [15.8, 1501.0], [15.9, 1502.0], [16.0, 1502.0], [16.1, 1503.0], [16.2, 1505.0], [16.3, 1506.0], [16.4, 1506.0], [16.5, 1507.0], [16.6, 1507.0], [16.7, 1508.0], [16.8, 1508.0], [16.9, 1508.0], [17.0, 1512.0], [17.1, 1512.0], [17.2, 1513.0], [17.3, 1514.0], [17.4, 1515.0], [17.5, 1516.0], [17.6, 1516.0], [17.7, 1516.0], [17.8, 1517.0], [17.9, 1517.0], [18.0, 1519.0], [18.1, 1519.0], [18.2, 1519.0], [18.3, 1520.0], [18.4, 1521.0], [18.5, 1521.0], [18.6, 1521.0], [18.7, 1523.0], [18.8, 1525.0], [18.9, 1526.0], [19.0, 1528.0], [19.1, 1528.0], [19.2, 1529.0], [19.3, 1529.0], [19.4, 1529.0], [19.5, 1530.0], [19.6, 1530.0], [19.7, 1531.0], [19.8, 1531.0], [19.9, 1531.0], [20.0, 1532.0], [20.1, 1533.0], [20.2, 1533.0], [20.3, 1533.0], [20.4, 1534.0], [20.5, 1535.0], [20.6, 1536.0], [20.7, 1536.0], [20.8, 1536.0], [20.9, 1537.0], [21.0, 1538.0], [21.1, 1539.0], [21.2, 1539.0], [21.3, 1540.0], [21.4, 1541.0], [21.5, 1541.0], [21.6, 1541.0], [21.7, 1542.0], [21.8, 1542.0], [21.9, 1542.0], [22.0, 1543.0], [22.1, 1544.0], [22.2, 1544.0], [22.3, 1544.0], [22.4, 1545.0], [22.5, 1545.0], [22.6, 1545.0], [22.7, 1545.0], [22.8, 1546.0], [22.9, 1546.0], [23.0, 1547.0], [23.1, 1548.0], [23.2, 1548.0], [23.3, 1548.0], [23.4, 1549.0], [23.5, 1549.0], [23.6, 1550.0], [23.7, 1550.0], [23.8, 1551.0], [23.9, 1551.0], [24.0, 1552.0], [24.1, 1553.0], [24.2, 1553.0], [24.3, 1553.0], [24.4, 1554.0], [24.5, 1554.0], [24.6, 1554.0], [24.7, 1554.0], [24.8, 1556.0], [24.9, 1557.0], [25.0, 1557.0], [25.1, 1559.0], [25.2, 1559.0], [25.3, 1560.0], [25.4, 1560.0], [25.5, 1561.0], [25.6, 1561.0], [25.7, 1561.0], [25.8, 1561.0], [25.9, 1563.0], [26.0, 1563.0], [26.1, 1563.0], [26.2, 1563.0], [26.3, 1563.0], [26.4, 1564.0], [26.5, 1564.0], [26.6, 1565.0], [26.7, 1566.0], [26.8, 1566.0], [26.9, 1566.0], [27.0, 1566.0], [27.1, 1567.0], [27.2, 1567.0], [27.3, 1568.0], [27.4, 1568.0], [27.5, 1568.0], [27.6, 1569.0], [27.7, 1569.0], [27.8, 1569.0], [27.9, 1570.0], [28.0, 1570.0], [28.1, 1571.0], [28.2, 1572.0], [28.3, 1572.0], [28.4, 1572.0], [28.5, 1573.0], [28.6, 1574.0], [28.7, 1575.0], [28.8, 1575.0], [28.9, 1575.0], [29.0, 1576.0], [29.1, 1576.0], [29.2, 1576.0], [29.3, 1577.0], [29.4, 1577.0], [29.5, 1577.0], [29.6, 1578.0], [29.7, 1578.0], [29.8, 1579.0], [29.9, 1579.0], [30.0, 1579.0], [30.1, 1580.0], [30.2, 1580.0], [30.3, 1580.0], [30.4, 1580.0], [30.5, 1582.0], [30.6, 1583.0], [30.7, 1583.0], [30.8, 1584.0], [30.9, 1586.0], [31.0, 1586.0], [31.1, 1586.0], [31.2, 1586.0], [31.3, 1587.0], [31.4, 1587.0], [31.5, 1587.0], [31.6, 1587.0], [31.7, 1588.0], [31.8, 1588.0], [31.9, 1588.0], [32.0, 1588.0], [32.1, 1591.0], [32.2, 1591.0], [32.3, 1592.0], [32.4, 1592.0], [32.5, 1592.0], [32.6, 1592.0], [32.7, 1593.0], [32.8, 1594.0], [32.9, 1594.0], [33.0, 1594.0], [33.1, 1594.0], [33.2, 1595.0], [33.3, 1596.0], [33.4, 1596.0], [33.5, 1596.0], [33.6, 1597.0], [33.7, 1597.0], [33.8, 1598.0], [33.9, 1598.0], [34.0, 1598.0], [34.1, 1598.0], [34.2, 1598.0], [34.3, 1599.0], [34.4, 1600.0], [34.5, 1601.0], [34.6, 1601.0], [34.7, 1602.0], [34.8, 1602.0], [34.9, 1603.0], [35.0, 1603.0], [35.1, 1603.0], [35.2, 1604.0], [35.3, 1604.0], [35.4, 1604.0], [35.5, 1605.0], [35.6, 1606.0], [35.7, 1606.0], [35.8, 1607.0], [35.9, 1608.0], [36.0, 1609.0], [36.1, 1609.0], [36.2, 1609.0], [36.3, 1610.0], [36.4, 1610.0], [36.5, 1610.0], [36.6, 1610.0], [36.7, 1611.0], [36.8, 1612.0], [36.9, 1612.0], [37.0, 1612.0], [37.1, 1614.0], [37.2, 1615.0], [37.3, 1616.0], [37.4, 1616.0], [37.5, 1617.0], [37.6, 1617.0], [37.7, 1617.0], [37.8, 1618.0], [37.9, 1618.0], [38.0, 1619.0], [38.1, 1619.0], [38.2, 1619.0], [38.3, 1619.0], [38.4, 1619.0], [38.5, 1620.0], [38.6, 1620.0], [38.7, 1621.0], [38.8, 1622.0], [38.9, 1622.0], [39.0, 1623.0], [39.1, 1623.0], [39.2, 1624.0], [39.3, 1624.0], [39.4, 1625.0], [39.5, 1625.0], [39.6, 1625.0], [39.7, 1626.0], [39.8, 1627.0], [39.9, 1627.0], [40.0, 1627.0], [40.1, 1628.0], [40.2, 1629.0], [40.3, 1629.0], [40.4, 1630.0], [40.5, 1630.0], [40.6, 1630.0], [40.7, 1631.0], [40.8, 1632.0], [40.9, 1632.0], [41.0, 1633.0], [41.1, 1633.0], [41.2, 1633.0], [41.3, 1634.0], [41.4, 1636.0], [41.5, 1636.0], [41.6, 1636.0], [41.7, 1636.0], [41.8, 1637.0], [41.9, 1637.0], [42.0, 1637.0], [42.1, 1637.0], [42.2, 1637.0], [42.3, 1637.0], [42.4, 1637.0], [42.5, 1638.0], [42.6, 1638.0], [42.7, 1638.0], [42.8, 1639.0], [42.9, 1639.0], [43.0, 1639.0], [43.1, 1640.0], [43.2, 1640.0], [43.3, 1640.0], [43.4, 1640.0], [43.5, 1640.0], [43.6, 1641.0], [43.7, 1641.0], [43.8, 1641.0], [43.9, 1642.0], [44.0, 1642.0], [44.1, 1642.0], [44.2, 1642.0], [44.3, 1643.0], [44.4, 1643.0], [44.5, 1644.0], [44.6, 1645.0], [44.7, 1645.0], [44.8, 1645.0], [44.9, 1646.0], [45.0, 1646.0], [45.1, 1646.0], [45.2, 1646.0], [45.3, 1647.0], [45.4, 1647.0], [45.5, 1647.0], [45.6, 1647.0], [45.7, 1648.0], [45.8, 1648.0], [45.9, 1648.0], [46.0, 1649.0], [46.1, 1649.0], [46.2, 1649.0], [46.3, 1651.0], [46.4, 1651.0], [46.5, 1651.0], [46.6, 1651.0], [46.7, 1651.0], [46.8, 1652.0], [46.9, 1652.0], [47.0, 1653.0], [47.1, 1653.0], [47.2, 1653.0], [47.3, 1653.0], [47.4, 1653.0], [47.5, 1654.0], [47.6, 1654.0], [47.7, 1654.0], [47.8, 1655.0], [47.9, 1656.0], [48.0, 1656.0], [48.1, 1657.0], [48.2, 1658.0], [48.3, 1659.0], [48.4, 1660.0], [48.5, 1660.0], [48.6, 1661.0], [48.7, 1662.0], [48.8, 1663.0], [48.9, 1663.0], [49.0, 1663.0], [49.1, 1663.0], [49.2, 1663.0], [49.3, 1664.0], [49.4, 1664.0], [49.5, 1664.0], [49.6, 1664.0], [49.7, 1665.0], [49.8, 1665.0], [49.9, 1665.0], [50.0, 1666.0], [50.1, 1666.0], [50.2, 1667.0], [50.3, 1667.0], [50.4, 1667.0], [50.5, 1667.0], [50.6, 1669.0], [50.7, 1669.0], [50.8, 1669.0], [50.9, 1671.0], [51.0, 1671.0], [51.1, 1672.0], [51.2, 1672.0], [51.3, 1672.0], [51.4, 1673.0], [51.5, 1673.0], [51.6, 1673.0], [51.7, 1674.0], [51.8, 1674.0], [51.9, 1674.0], [52.0, 1675.0], [52.1, 1675.0], [52.2, 1676.0], [52.3, 1677.0], [52.4, 1677.0], [52.5, 1679.0], [52.6, 1680.0], [52.7, 1680.0], [52.8, 1680.0], [52.9, 1681.0], [53.0, 1681.0], [53.1, 1681.0], [53.2, 1682.0], [53.3, 1684.0], [53.4, 1684.0], [53.5, 1684.0], [53.6, 1685.0], [53.7, 1685.0], [53.8, 1686.0], [53.9, 1686.0], [54.0, 1687.0], [54.1, 1689.0], [54.2, 1690.0], [54.3, 1690.0], [54.4, 1690.0], [54.5, 1691.0], [54.6, 1691.0], [54.7, 1692.0], [54.8, 1692.0], [54.9, 1696.0], [55.0, 1696.0], [55.1, 1696.0], [55.2, 1697.0], [55.3, 1698.0], [55.4, 1699.0], [55.5, 1699.0], [55.6, 1699.0], [55.7, 1699.0], [55.8, 1699.0], [55.9, 1700.0], [56.0, 1700.0], [56.1, 1700.0], [56.2, 1701.0], [56.3, 1701.0], [56.4, 1702.0], [56.5, 1702.0], [56.6, 1702.0], [56.7, 1703.0], [56.8, 1703.0], [56.9, 1703.0], [57.0, 1704.0], [57.1, 1705.0], [57.2, 1705.0], [57.3, 1706.0], [57.4, 1707.0], [57.5, 1707.0], [57.6, 1707.0], [57.7, 1708.0], [57.8, 1709.0], [57.9, 1709.0], [58.0, 1710.0], [58.1, 1710.0], [58.2, 1710.0], [58.3, 1711.0], [58.4, 1712.0], [58.5, 1712.0], [58.6, 1713.0], [58.7, 1714.0], [58.8, 1715.0], [58.9, 1715.0], [59.0, 1715.0], [59.1, 1717.0], [59.2, 1717.0], [59.3, 1717.0], [59.4, 1717.0], [59.5, 1718.0], [59.6, 1719.0], [59.7, 1719.0], [59.8, 1719.0], [59.9, 1720.0], [60.0, 1720.0], [60.1, 1720.0], [60.2, 1721.0], [60.3, 1723.0], [60.4, 1723.0], [60.5, 1723.0], [60.6, 1723.0], [60.7, 1724.0], [60.8, 1724.0], [60.9, 1724.0], [61.0, 1725.0], [61.1, 1726.0], [61.2, 1727.0], [61.3, 1728.0], [61.4, 1728.0], [61.5, 1729.0], [61.6, 1729.0], [61.7, 1729.0], [61.8, 1730.0], [61.9, 1731.0], [62.0, 1731.0], [62.1, 1731.0], [62.2, 1732.0], [62.3, 1732.0], [62.4, 1733.0], [62.5, 1733.0], [62.6, 1733.0], [62.7, 1733.0], [62.8, 1734.0], [62.9, 1734.0], [63.0, 1736.0], [63.1, 1736.0], [63.2, 1738.0], [63.3, 1739.0], [63.4, 1740.0], [63.5, 1741.0], [63.6, 1741.0], [63.7, 1742.0], [63.8, 1744.0], [63.9, 1744.0], [64.0, 1745.0], [64.1, 1746.0], [64.2, 1747.0], [64.3, 1747.0], [64.4, 1747.0], [64.5, 1748.0], [64.6, 1748.0], [64.7, 1748.0], [64.8, 1749.0], [64.9, 1749.0], [65.0, 1749.0], [65.1, 1751.0], [65.2, 1752.0], [65.3, 1754.0], [65.4, 1754.0], [65.5, 1754.0], [65.6, 1755.0], [65.7, 1755.0], [65.8, 1756.0], [65.9, 1756.0], [66.0, 1756.0], [66.1, 1756.0], [66.2, 1756.0], [66.3, 1757.0], [66.4, 1757.0], [66.5, 1757.0], [66.6, 1759.0], [66.7, 1760.0], [66.8, 1760.0], [66.9, 1761.0], [67.0, 1761.0], [67.1, 1762.0], [67.2, 1763.0], [67.3, 1764.0], [67.4, 1764.0], [67.5, 1764.0], [67.6, 1764.0], [67.7, 1765.0], [67.8, 1766.0], [67.9, 1767.0], [68.0, 1768.0], [68.1, 1770.0], [68.2, 1770.0], [68.3, 1771.0], [68.4, 1771.0], [68.5, 1773.0], [68.6, 1774.0], [68.7, 1774.0], [68.8, 1775.0], [68.9, 1775.0], [69.0, 1776.0], [69.1, 1777.0], [69.2, 1778.0], [69.3, 1778.0], [69.4, 1778.0], [69.5, 1780.0], [69.6, 1781.0], [69.7, 1781.0], [69.8, 1783.0], [69.9, 1783.0], [70.0, 1783.0], [70.1, 1784.0], [70.2, 1784.0], [70.3, 1785.0], [70.4, 1786.0], [70.5, 1787.0], [70.6, 1787.0], [70.7, 1788.0], [70.8, 1788.0], [70.9, 1789.0], [71.0, 1789.0], [71.1, 1790.0], [71.2, 1790.0], [71.3, 1791.0], [71.4, 1791.0], [71.5, 1791.0], [71.6, 1793.0], [71.7, 1793.0], [71.8, 1795.0], [71.9, 1796.0], [72.0, 1797.0], [72.1, 1799.0], [72.2, 1800.0], [72.3, 1801.0], [72.4, 1801.0], [72.5, 1801.0], [72.6, 1803.0], [72.7, 1803.0], [72.8, 1803.0], [72.9, 1804.0], [73.0, 1805.0], [73.1, 1805.0], [73.2, 1806.0], [73.3, 1806.0], [73.4, 1806.0], [73.5, 1807.0], [73.6, 1807.0], [73.7, 1809.0], [73.8, 1811.0], [73.9, 1811.0], [74.0, 1811.0], [74.1, 1811.0], [74.2, 1812.0], [74.3, 1814.0], [74.4, 1814.0], [74.5, 1815.0], [74.6, 1816.0], [74.7, 1816.0], [74.8, 1817.0], [74.9, 1817.0], [75.0, 1818.0], [75.1, 1818.0], [75.2, 1818.0], [75.3, 1818.0], [75.4, 1820.0], [75.5, 1820.0], [75.6, 1821.0], [75.7, 1822.0], [75.8, 1824.0], [75.9, 1824.0], [76.0, 1824.0], [76.1, 1825.0], [76.2, 1827.0], [76.3, 1828.0], [76.4, 1829.0], [76.5, 1830.0], [76.6, 1830.0], [76.7, 1831.0], [76.8, 1831.0], [76.9, 1831.0], [77.0, 1832.0], [77.1, 1832.0], [77.2, 1832.0], [77.3, 1833.0], [77.4, 1835.0], [77.5, 1836.0], [77.6, 1838.0], [77.7, 1839.0], [77.8, 1839.0], [77.9, 1839.0], [78.0, 1840.0], [78.1, 1841.0], [78.2, 1844.0], [78.3, 1844.0], [78.4, 1845.0], [78.5, 1845.0], [78.6, 1845.0], [78.7, 1846.0], [78.8, 1847.0], [78.9, 1847.0], [79.0, 1848.0], [79.1, 1848.0], [79.2, 1848.0], [79.3, 1848.0], [79.4, 1848.0], [79.5, 1851.0], [79.6, 1853.0], [79.7, 1854.0], [79.8, 1854.0], [79.9, 1854.0], [80.0, 1854.0], [80.1, 1855.0], [80.2, 1855.0], [80.3, 1855.0], [80.4, 1857.0], [80.5, 1859.0], [80.6, 1859.0], [80.7, 1861.0], [80.8, 1861.0], [80.9, 1861.0], [81.0, 1861.0], [81.1, 1862.0], [81.2, 1863.0], [81.3, 1863.0], [81.4, 1864.0], [81.5, 1864.0], [81.6, 1865.0], [81.7, 1866.0], [81.8, 1866.0], [81.9, 1866.0], [82.0, 1866.0], [82.1, 1866.0], [82.2, 1868.0], [82.3, 1870.0], [82.4, 1871.0], [82.5, 1871.0], [82.6, 1872.0], [82.7, 1875.0], [82.8, 1876.0], [82.9, 1876.0], [83.0, 1878.0], [83.1, 1879.0], [83.2, 1880.0], [83.3, 1881.0], [83.4, 1882.0], [83.5, 1882.0], [83.6, 1883.0], [83.7, 1883.0], [83.8, 1884.0], [83.9, 1884.0], [84.0, 1884.0], [84.1, 1885.0], [84.2, 1886.0], [84.3, 1888.0], [84.4, 1888.0], [84.5, 1888.0], [84.6, 1890.0], [84.7, 1890.0], [84.8, 1890.0], [84.9, 1892.0], [85.0, 1893.0], [85.1, 1893.0], [85.2, 1894.0], [85.3, 1895.0], [85.4, 1896.0], [85.5, 1897.0], [85.6, 1901.0], [85.7, 1902.0], [85.8, 1903.0], [85.9, 1904.0], [86.0, 1905.0], [86.1, 1906.0], [86.2, 1907.0], [86.3, 1907.0], [86.4, 1908.0], [86.5, 1909.0], [86.6, 1910.0], [86.7, 1913.0], [86.8, 1913.0], [86.9, 1915.0], [87.0, 1916.0], [87.1, 1916.0], [87.2, 1917.0], [87.3, 1919.0], [87.4, 1920.0], [87.5, 1920.0], [87.6, 1921.0], [87.7, 1922.0], [87.8, 1923.0], [87.9, 1925.0], [88.0, 1925.0], [88.1, 1927.0], [88.2, 1927.0], [88.3, 1929.0], [88.4, 1930.0], [88.5, 1932.0], [88.6, 1933.0], [88.7, 1933.0], [88.8, 1934.0], [88.9, 1935.0], [89.0, 1937.0], [89.1, 1938.0], [89.2, 1938.0], [89.3, 1939.0], [89.4, 1940.0], [89.5, 1940.0], [89.6, 1950.0], [89.7, 1951.0], [89.8, 1951.0], [89.9, 1951.0], [90.0, 1954.0], [90.1, 1958.0], [90.2, 1958.0], [90.3, 1960.0], [90.4, 1962.0], [90.5, 1963.0], [90.6, 1965.0], [90.7, 1966.0], [90.8, 1967.0], [90.9, 1969.0], [91.0, 1970.0], [91.1, 1972.0], [91.2, 1974.0], [91.3, 1975.0], [91.4, 1976.0], [91.5, 1976.0], [91.6, 1977.0], [91.7, 1978.0], [91.8, 1980.0], [91.9, 1981.0], [92.0, 1981.0], [92.1, 1984.0], [92.2, 1984.0], [92.3, 1990.0], [92.4, 1993.0], [92.5, 1993.0], [92.6, 1995.0], [92.7, 2001.0], [92.8, 2001.0], [92.9, 2002.0], [93.0, 2005.0], [93.1, 2006.0], [93.2, 2006.0], [93.3, 2008.0], [93.4, 2009.0], [93.5, 2011.0], [93.6, 2017.0], [93.7, 2018.0], [93.8, 2018.0], [93.9, 2019.0], [94.0, 2020.0], [94.1, 2021.0], [94.2, 2022.0], [94.3, 2024.0], [94.4, 2027.0], [94.5, 2027.0], [94.6, 2029.0], [94.7, 2032.0], [94.8, 2032.0], [94.9, 2032.0], [95.0, 2044.0], [95.1, 2044.0], [95.2, 2046.0], [95.3, 2048.0], [95.4, 2049.0], [95.5, 2051.0], [95.6, 2054.0], [95.7, 2054.0], [95.8, 2057.0], [95.9, 2057.0], [96.0, 2059.0], [96.1, 2061.0], [96.2, 2063.0], [96.3, 2063.0], [96.4, 2063.0], [96.5, 2067.0], [96.6, 2074.0], [96.7, 2077.0], [96.8, 2078.0], [96.9, 2083.0], [97.0, 2085.0], [97.1, 2088.0], [97.2, 2090.0], [97.3, 2096.0], [97.4, 2104.0], [97.5, 2107.0], [97.6, 2119.0], [97.7, 2140.0], [97.8, 2141.0], [97.9, 2141.0], [98.0, 2157.0], [98.1, 2167.0], [98.2, 2179.0], [98.3, 2183.0], [98.4, 2188.0], [98.5, 2196.0], [98.6, 2200.0], [98.7, 2219.0], [98.8, 2221.0], [98.9, 2225.0], [99.0, 2229.0], [99.1, 2231.0], [99.2, 2236.0], [99.3, 2245.0], [99.4, 2251.0], [99.5, 2255.0], [99.6, 2263.0], [99.7, 2414.0], [99.8, 3056.0], [99.9, 3199.0], [100.0, 3314.0]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 271.0, "series": [{"data": [[0.0, 4.0], [600.0, 10.0], [700.0, 17.0], [800.0, 9.0], [900.0, 10.0], [1000.0, 8.0], [1100.0, 15.0], [1200.0, 11.0], [1300.0, 7.0], [1400.0, 55.0], [1500.0, 235.0], [100.0, 10.0], [1600.0, 271.0], [1700.0, 205.0], [1800.0, 169.0], [1900.0, 89.0], [2000.0, 60.0], [2100.0, 15.0], [2200.0, 13.0], [2300.0, 1.0], [2400.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 12.0], [3300.0, 1.0], [300.0, 12.0], [400.0, 4.0], [500.0, 13.0]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 42.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 1061.0, "series": [{"data": [[0.0, 42.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 156.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [[2.0, 1061.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 94.19698173153292, "minX": 1.77079596E12, "maxY": 94.19698173153292, "series": [{"data": [[1.77079596E12, 94.19698173153292]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77079596E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 79.0, "minX": 1.0, "maxY": 2046.0, "series": [{"data": [[2.0, 1780.0], [3.0, 1981.0], [4.0, 852.5], [5.0, 1796.0], [6.0, 1657.0], [7.0, 1958.0], [8.0, 1908.0], [9.0, 1603.0], [10.0, 1622.0], [11.0, 79.0], [12.0, 1724.0], [13.0, 1916.0], [14.0, 1699.0], [15.0, 1715.0], [16.0, 112.0], [17.0, 1203.3333333333333], [18.0, 676.0], [19.0, 1062.5], [20.0, 1697.0], [21.0, 978.0], [22.0, 1691.0], [23.0, 1731.0], [24.0, 2046.0], [25.0, 1724.0], [26.0, 918.5], [28.0, 1324.3333333333333], [29.0, 969.0], [30.0, 1619.0], [31.0, 1667.0], [33.0, 989.0], [32.0, 1861.0], [35.0, 997.5], [34.0, 2011.0], [36.0, 1081.5], [37.0, 978.5], [38.0, 792.6666666666666], [39.0, 1027.0], [41.0, 1962.0], [40.0, 1801.0], [43.0, 994.0], [42.0, 1840.0], [45.0, 857.0], [44.0, 1958.0], [47.0, 1023.5], [46.0, 1805.0], [49.0, 1053.5], [48.0, 1859.0], [51.0, 865.6666666666666], [50.0, 1825.0], [53.0, 1059.0], [52.0, 1847.0], [55.0, 1761.0], [54.0, 1729.0], [57.0, 912.3333333333334], [56.0, 1848.0], [58.0, 1027.0], [59.0, 1797.0], [61.0, 1112.0], [60.0, 1717.0], [62.0, 1667.0], [64.0, 1092.0], [65.0, 861.0], [66.0, 1078.5], [67.0, 1790.0], [68.0, 1014.5], [71.0, 1104.5], [70.0, 1835.0], [69.0, 1661.0], [73.0, 1071.0], [75.0, 1639.0], [74.0, 1639.0], [72.0, 1756.0], [77.0, 1087.0], [79.0, 1720.0], [78.0, 1735.0], [76.0, 1672.0], [83.0, 1051.0], [82.0, 1549.0], [81.0, 1594.0], [80.0, 1703.0], [85.0, 1145.5], [87.0, 1076.3333333333333], [86.0, 1647.0], [84.0, 1624.0], [90.0, 936.6666666666667], [91.0, 1110.0], [89.0, 1595.0], [88.0, 1552.0], [92.0, 967.5], [93.0, 1121.0], [94.0, 1194.5], [95.0, 1542.0], [96.0, 990.6666666666667], [99.0, 1236.0], [98.0, 1633.0], [97.0, 1692.0], [100.0, 1664.6097560975604], [1.0, 1903.0]], "isOverall": false, "label": "/user/search", "isController": false}, {"data": [[94.19698173153292, 1617.5512311358214]], "isOverall": false, "label": "/user/search-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3462.25, "minX": 1.77079596E12, "maxY": 3.315898835E7, "series": [{"data": [[1.77079596E12, 3.315898835E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77079596E12, 3462.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77079596E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1617.5512311358214, "minX": 1.77079596E12, "maxY": 1617.5512311358214, "series": [{"data": [[1.77079596E12, 1617.5512311358214]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77079596E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1599.1779189833196, "minX": 1.77079596E12, "maxY": 1599.1779189833196, "series": [{"data": [[1.77079596E12, 1599.1779189833196]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77079596E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.050039714058776885, "minX": 1.77079596E12, "maxY": 0.050039714058776885, "series": [{"data": [[1.77079596E12, 0.050039714058776885]], "isOverall": false, "label": "/user/search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77079596E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 38.0, "minX": 1.77079596E12, "maxY": 3314.0, "series": [{"data": [[1.77079596E12, 3314.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77079596E12, 1954.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77079596E12, 2229.8]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77079596E12, 2044.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77079596E12, 38.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77079596E12, 1666.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77079596E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 181.0, "minX": 17.0, "maxY": 1925.0, "series": [{"data": [[47.0, 1925.0], [52.0, 1823.0], [55.0, 1641.5], [56.0, 1626.5], [57.0, 1663.5], [59.0, 1739.0], [58.0, 1806.0], [60.0, 1676.5], [62.0, 1641.0], [63.0, 1653.0], [67.0, 609.0], [64.0, 1628.0], [17.0, 1780.0], [19.0, 181.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 165.0, "minX": 17.0, "maxY": 1908.0, "series": [{"data": [[47.0, 1908.0], [52.0, 1805.0], [55.0, 1627.5], [56.0, 1613.5], [57.0, 1644.5], [59.0, 1723.0], [58.0, 1800.0], [60.0, 1657.5], [62.0, 1630.5], [63.0, 1636.5], [67.0, 583.0], [64.0, 1615.5], [17.0, 1771.0], [19.0, 165.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 20.983333333333334, "minX": 1.77079596E12, "maxY": 20.983333333333334, "series": [{"data": [[1.77079596E12, 20.983333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77079596E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 20.983333333333334, "minX": 1.77079596E12, "maxY": 20.983333333333334, "series": [{"data": [[1.77079596E12, 20.983333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77079596E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 20.983333333333334, "minX": 1.77079596E12, "maxY": 20.983333333333334, "series": [{"data": [[1.77079596E12, 20.983333333333334]], "isOverall": false, "label": "/user/search-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77079596E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 20.983333333333334, "minX": 1.77079596E12, "maxY": 20.983333333333334, "series": [{"data": [[1.77079596E12, 20.983333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77079596E12, "title": "Total Transactions Per Second"}},
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

