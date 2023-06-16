-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-12-03 14:06:49
-- 伺服器版本： 10.4.14-MariaDB
-- PHP 版本： 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `jobfun`
--
CREATE DATABASE IF NOT EXISTS `jobfun` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `jobfun`;
-- --------------------------------------------------------

--
-- 資料表結構 `citylist`
--

CREATE TABLE `citylist` (
  `cityId` int(11) NOT NULL,
  `cityName` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `citylist`
--

INSERT INTO `citylist` (`cityId`, `cityName`) VALUES
(1, '臺北市'),
(2, '新北市'),
(3, '桃園市'),
(4, '臺中市'),
(5, '臺南市'),
(6, '高雄市'),
(7, '基隆市'),
(8, '新竹市'),
(9, '嘉義市'),
(10, '新竹縣'),
(11, '苗栗縣'),
(12, '彰化縣'),
(13, '南投縣'),
(14, '雲林縣'),
(15, '嘉義縣'),
(16, '屏東縣'),
(17, '宜蘭縣'),
(18, '花蓮縣'),
(19, '臺東縣'),
(20, '澎湖縣'),
(21, '金門縣'),
(22, '連江縣');

-- --------------------------------------------------------

--
-- 資料表結構 `collectlist`
--

CREATE TABLE `collectlist` (
  `collcetId` int(11) NOT NULL,
  `memberId` int(11) DEFAULT NULL,
  `jobId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `collectlist`
--

INSERT INTO `collectlist` (`collcetId`, `memberId`, `jobId`) VALUES
(1, 1, 8),
(4, 1, 4),
(7, 19, 9),
(9, 1, 9),
(10, 1, 14),
(11, 13, 14),
(13, 1, 30),
(14, 21, 35),
(18, 1, 5),
(20, 1, 40);

-- --------------------------------------------------------

--
-- 資料表結構 `company`
--

CREATE TABLE `company` (
  `companyId` int(11) NOT NULL,
  `companyAccount` varchar(20) DEFAULT NULL,
  `companyPassword` varchar(20) DEFAULT NULL,
  `companyName` varchar(30) DEFAULT NULL,
  `companyAera` int(11) DEFAULT NULL,
  `companyAddress` varchar(50) DEFAULT NULL,
  `companyPhone` varchar(10) DEFAULT NULL,
  `companyEmail` varchar(30) DEFAULT NULL,
  `companyCheck` varchar(10) DEFAULT NULL,
  `companyLogo` varchar(225) DEFAULT NULL,
  `companyPhoto1` varchar(225) DEFAULT NULL,
  `companyPhoto2` varchar(225) DEFAULT NULL,
  `companyPhoto3` varchar(225) DEFAULT NULL,
  `companyPhoto4` varchar(225) DEFAULT NULL,
  `companyPhoto5` varchar(225) DEFAULT NULL,
  `companyIntro` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `company`
--

INSERT INTO `company` (`companyId`, `companyAccount`, `companyPassword`, `companyName`, `companyAera`, `companyAddress`, `companyPhone`, `companyEmail`, `companyCheck`, `companyLogo`, `companyPhoto1`, `companyPhoto2`, `companyPhoto3`, `companyPhoto4`, `companyPhoto5`, `companyIntro`) VALUES
(1, 'qwer1234', '1', '史密斯工業科技', 1, '台北市中正區和平路115-3號', '02-1234567', 'smithltd@xxaamail.com', 'passed', '1606960294633-tips_text_job.png', '1606741380213-pexels-ingo-joseph-188035.jpg', '1606962546063-tips_text_job.png', '1606486963700-pexels-pixabay-273250.jpg', '1606486965957-pexels-startup-stock-photos-7065.jpg', '1606486968832-pexels-startup-stock-photos-7070 (1).jpg', '我們更以積極、穩健的腳步不斷的研發，\n讓製程設備更自動化、人性化、及防呆裝置，\n使客戶在使用上無後顧之憂，用最誠懇的服務、\n最高的品質需求，呈現給客戶。歷經多年的努力研發，我們不斷的設計製造精良的PCB、\n光電及LED濕製程設備，並獲得業界的肯定及好評。\n以『穩健、踏實、誠信』的經營理念，\n幫助提昇客戶生產效率，降低營運成本，增加競爭優勢！'),
(2, '123456', '12345', 'Hela Product Inc.', 60, '台中市北屯區崇德十路二段5號', '06-5577668', '0asx@xmail.com', 'pending', '1606844624982-1606844590549.jpg', '1606487939446-pexels-pixabay-221537.jpg', '1606487942529-pexels-fauxels-3183197.jpg', '1606487944811-pexels-atbo-245240.jpg', '1606487947317-pexels-pixabay-260689.jpg', '1606487950085-pexels-cadeau-maestro-1170412.jpg', 'Hela 在中國、美國、日本及歐體等 80 個工業先進國家，完成商標註冊登記，\n並且持續推廣運用， \n如今Hela已是世界知名品牌之一。'),
(15, 'apple', '1', '歐文股份有限公司', 61, '台中市西屯區天保街60號', '05-5856773', 'owen@mail.com', 'pending', NULL, '1606835207935-1_A6T-abUnVJ9YGe7sfOpnhQ.jpg', NULL, NULL, NULL, NULL, '成立於民國一百年九月，\n由一群團隊跨醫療、資訊、管理領域團隊結合而成，\n透過團隊的研發及設計能力，將為醫療資訊產業的創新主導者。\n具人性化管理工作環境；產品設計主要以使用者為中心，\n發展促使醫療人員作業更有效率、準確性更高且醫療照護品質更卓越之系統設備。'),
(16, '11', 'a', '和美多媒體有限公司', 55, '400台中市中區大誠街5號', '06-1234567', 'qqaa@mail.com', 'pending', NULL, '1606839529594-aaxx.jpg', '1606839532887-des.jpg', NULL, NULL, NULL, '我們是和美影視，我們擅長的領域從廣告拍攝到企業簡介，目前專案類型從政府專案到各產業的客戶皆有。\n我們公司雖然不大，但是是溫暖且充滿正能量的公司，如果要拿卡通來比喻的話，我們會像「pokemon」，我們享受與每個人的合作(互動)產出的成果，並包容每個人不同的個性，也樂於去分享自己的特殊技能，創造出我們的專屬文化。\n我們願意提供許多其他公司做不到的資源供大家學習，因為我們深信唯有大家一起成長，公司的未來才會越來越好！'),
(17, 'zz', '1', '洛也設計', 62, '台中市南屯區公益路二段51號10F', '02-125888', 'mmtt@aamail.com', 'pending', NULL, '1606839893812-aa.jpg', '1606839803857-pexels-startup-stock-photos-7065.jpg', NULL, NULL, NULL, '洛也數位設計位於台中、服務全台最方便，擁有多年協助企業 / 政府機關的經驗。\n無論在行銷規劃、廣告設計、網站設計、企業E化設計 ，皆擁有卓越的表現，請聯絡我們，諮詢了解!'),
(18, 'cc', '1', 'Babb整合行銷', 10, '台北市內湖區大湖山莊街120巷1號', '07-222158', '8sad@sqc.com', 'pending', NULL, '1606840287587-aaasd.jpg', '1606840290998-pexels-pixabay-260689.jpg', NULL, NULL, NULL, '以各式行銷方式(如電話、DM、電子商務等..)快速將優質商品提供給不同屬性、不同需求的客戶；\n公司著重『熱情活力』、『透明開放』、『組織紀律』、『使命必達』的企業文化，並以創造客戶福祉、成為華人電銷業第一品牌為我們的願景。'),
(19, 'qq', '1', '品泰技股份有限公司', 63, '台中市太平區太平13街5-5號', '05-7771574', 'cca@kok.com', 'pending', NULL, '1606840703450-vcbvc.jpg', '1606840707098-pexels-startup-stock-photos-7070 (1).jpg', NULL, NULL, NULL, '歡迎來到品泰技股份有限公司\n一個提供完整的產品設計開發服務方案的設計團隊\n前端設計公司的工作團隊是目前國內設計業界中少數能整合設計與量產經驗的團隊\n以提供符合客戶競爭層面需求的設計提案與完整的設計服務為最大目標\n\n品泰技股份有限公司的產品開發經驗涵蓋3C產品、家具及生活用品及家電等\n並朝自行開發產品販售的目標方向發展\n前端設計服務工作範圍包括：產品設計、機構設計、原型製造及量產製造\n期望以完整的設計服務內容，提供客戶多種解決產品設計開發的方案\n並以設計作為貫通產品策略與量產實務的管道'),
(20, 'zxc', '222', 'KaS Product Inc.', 1, '台北市中正區大埔街36號', '05-4758417', 'sdadmail', 'pending', NULL, '1606872520387-pexels-pixabay-273250.jpg', NULL, NULL, NULL, NULL, '專注於企業IT軟硬體設備代理業務將近四十年，\n多年來零壹以專業的能力、熱情的態度、服務的精神，結合專業與服務，\n並力行實踐，與合作夥伴達到雙贏的目標；\n創造與客戶共生互利的價值，讓原廠、經銷夥伴，以及終端客戶，\n都能透過零壹提供的解決方案獲得最大價值與商機。'),
(21, 'aaa123', '1234', 'NVNC Product Inc.', 1, '台北市中正區大埔街36號', '06-3154778', 'nvos@gnmail.com', 'pending', '1606874936457-aaasd.jpg', '1606874966331-aa.jpg', '1606874969930-aaasd.jpg', '1606874973235-aaxx.jpg', '1606874976332-des.jpg', '1606874979910-pexels-atbo-245240.jpg', '專注於企業IT軟硬體設備代理業務將近四十年，\n多年來零壹以專業的能力、熱情的態度、服務的精神，結合專業與服務，\n並力行實踐，與合作夥伴達到雙贏的目標；\n創造與客戶共生互利的價值，讓原廠、經銷夥伴，以及終端客戶，\n都能透過零壹提供的解決方案獲得最大價值與商機。');

-- --------------------------------------------------------

--
-- 資料表結構 `job`
--

CREATE TABLE `job` (
  `jobId` int(11) NOT NULL,
  `jobName` varchar(50) DEFAULT NULL,
  `companyId` int(11) DEFAULT NULL,
  `jobClassId` int(11) DEFAULT NULL,
  `jobAera` int(11) DEFAULT NULL,
  `jobAddress` varchar(50) DEFAULT NULL,
  `jobAddtime` datetime DEFAULT NULL,
  `jobStartTime` date DEFAULT NULL,
  `jobEndTime` date DEFAULT NULL,
  `jobContent` text DEFAULT NULL,
  `jobPay` text DEFAULT NULL,
  `jobCondition` text DEFAULT NULL,
  `jobStatus` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `job`
--

INSERT INTO `job` (`jobId`, `jobName`, `companyId`, `jobClassId`, `jobAera`, `jobAddress`, `jobAddtime`, `jobStartTime`, `jobEndTime`, `jobContent`, `jobPay`, `jobCondition`, `jobStatus`) VALUES
(3, '前端工程實習生', 2, 1, 50, '台中市南屯區公益路二段51號18F', '2020-11-13 15:36:36', '2020-12-01', '2020-12-31', '你是個對科技對科學有興趣喜歡動手拼東西的Maker嗎？\r\n康泰是個新創公司\r\n我們設計的產品如科幻電影裡的腦機介面..\r\n用思維控制機器人手臂 用電生理訊號控制老鼠的行為... \r\n我們的客戶都是世界頂尖的科學家(Stanford, Harvard, MIT, etc) \r\n對想了解神經科學或日後有興趣申請國外學校會有極大的幫助 \r\n我們希望找能長期以半工半讀到畢業後到公司發展', '1.時薪:200\r\n2.勞健保', '對以下有經驗的優先考量:\r\n1. 3D printing,3D CAD\r\n2. 產品打樣 (CNC, 3D printing, laser etc)\r\n3. 寫程式 (C/C++/Java/Python/etc)\r\n4. 開發 iOS/Android App\r\n5. Raspberry Pi/Arduino\r\n6. Graphic/video design and editing', 'on'),
(5, '前端工程實習生', 2, 1, 1, '台中市南屯區公益路二段51號18F', '2020-11-13 15:36:36', '2020-12-01', '2020-12-31', '你是個對科技對科學有興趣喜歡動手拼東西的Maker嗎？\r\n康泰是個新創公司\r\n我們設計的產品如科幻電影裡的腦機介面..\r\n用思維控制機器人手臂 用電生理訊號控制老鼠的行為... \r\n我們的客戶都是世界頂尖的科學家(Stanford, Harvard, MIT, etc) \r\n對想了解神經科學或日後有興趣申請國外學校會有極大的幫助 \r\n我們希望找能長期以半工半讀到畢業後到公司發展', '1.時薪:200\r\n2.勞健保', '對以下有經驗的優先考量:\r\n1. 3D printing,3D CAD\r\n2. 產品打樣 (CNC, 3D printing, laser etc)\r\n3. 寫程式 (C/C++/Java/Python/etc)\r\n4. 開發 iOS/Android App\r\n5. Raspberry Pi/Arduino\r\n6. Graphic/video design and editing', 'on'),
(31, '英文社群行銷實習', 15, 6, 61, '台中市西屯區天保街60號', '2020-11-30 23:01:45', '2020-12-01', '2021-01-31', 'Core Job Responsibilities\nEnglish Content Writing & SEO - Be responsible for copywriting/content writing and evolving CakeResume’s marketing strategy\nBuild our oversea branding and impressions on social media channels.\nHelp CakeResume manage and develop strategies on different social channels, such as Facebook, LinkedIn, Instagram, and YouTube.', 'Bonus Qualifications\nPrevious internship experience with an international team or company\nExperience with SEO', 'Basic Qualifications\n 1.Professional English writing', 'on'),
(38, '行銷活動助理', 1, 6, 1, '台北市中正區和平路115-3號', '2020-12-01 23:55:42', '2021-01-01', '2021-01-31', '你喜歡與人交流？ 熱衷於參加各種活動、拓展你的人脈嗎？　\n\n【職務描述】\n\n1. 平日晚上/假日活動執行協助\n2. 活動期間協助報到、佈場、環境整理及復原\n3. 主管交辦事項', '值班一場提供單場 $500 補助。\n一天早、中、晚為三個場次，若是早上+下午的工作坊形式則為兩場 $1000 補助。', '=加入我們=\n我們能提供全球舞台 你準備好了嗎? 我們樂於在工作中不斷培養員工的工作實力及自信\n，不僅提供全方位貼心的照顧及保障，更提供內部創業制度，讓員工不需轉換跑道，在企\n業裡就可完整歷練、規劃自己的職涯。\n\n熱情、開朗、大方、創新、積極、機伶、體貼、謹慎、美感 以上人格特質如果你沒有包含\n三個已上請勿投履歷喔!', 'on'),
(39, 'App/網頁開發實習生', 15, 2, 61, '台中市西屯區天保街60號', '2020-12-02 00:00:47', '2021-01-01', '2021-01-31', '【工作內容】\n• 資訊相關科系 大三大四生或剛畢業者尤佳\n• 熟悉javascript, Git版控尤佳', '【公司福利】\n週休二日.年薪12個月加上年終獎金.每年依考核調薪.3節禮金.免費中餐供應.享有勞保.健保.勞退.工作滿一年者有七天休假其它依勞基法規定\n彈性工時 , 彈性工作地點（詳情依公司規定）', '【相關條件】\n- 學歷要求：專科、大學、碩士\n- 公司產業：自動控制相關業\n- 科系要求：資訊工程相關\n- 語文條件：不拘\n- 擅長工具：JavaScript、jQuery、CSS、Node.js、D3.js\n- 工作技能：資料庫程式設計', 'on'),
(40, '視覺設計實習生', 2, 23, 60, '台中市北屯區崇德十路二段5號', '2020-12-02 00:08:35', '2021-01-01', '2021-02-28', '▋ 職位介紹\n因為我們的影像專案除了影像視覺製作外，也會結合相關的社群行銷，所以我們開設了視覺設計的職位。這個職位會參與粉絲頁圖文設計與協助維護經營操作、也可參與元件動畫角色的製作，並可以從中學習到如何依據受眾的需求設計排版、將複雜資料排版成為好看又有重點的圖片，也可以藉此累積相關的作品集喔~\n\n▋ 工作內容\n\n●懶人包插畫\n●粉絲頁協助繪製\n●PPT簡報美化\n●網頁行銷視覺協助繪製等\n●元件角色動畫協助製作', '●實習福利制度：\n1.訓練計畫：我們不只提供實習，更給予專業培訓，若無快速學習能力、學習熱誠者，請審慎申請\n2.獎助學金：工作態度及格者，將提供獎助學金五千元，非台中人另提供住宿或交通津貼(最高五千)，表現優秀者可申請留任獎助學金兩萬元。', '●AI、PS設計能力\n●有一定的色彩與美感\n●積極學習心態(當你正式踏入業界，設計一定都會有需要修改的時候、抱持著願意學習心態，我們才有辦法提供給你更多東西！)\n●需檢附相關文字與設計、插圖、排版作品', 'on'),
(41, '平面設計實習生', 16, 23, 55, '400台中市中區大誠街5號', '2020-12-02 00:16:09', '2021-01-01', '2021-02-28', '【工作內容】\n1.設計製作平面文宣、海報和DM。\n2.規劃商品包裝的設計理念。\n3.修改並執行其設計理念。\n4.將設計概念具體化，成為插圖或是商品包裝等。', '【公司福利】\n依據勞基法規定, 績效獎金, 在職訓練, 專案獎金, 加班誤餐費, 三節禮品獎金', '【相關條件】\n- 接受身份：\n- 工作經歷：不拘\n- 學歷要求：大學\n- 公司產業：廣告行銷公關業\n- 科系要求：藝術學科類\n- 語文條件：不拘\n- 擅長工具：Adobe Photoshop、Illustrator\n- 工作技能：不拘', 'on'),
(42, '數位設計實習生', 17, 23, 61, '台中市南屯區公益路二段51號10F', '2020-12-02 00:26:16', '2021-02-01', '2021-03-31', '【工作內容】\n1、 illustrator、PhotoShop。\n2、設計各式 CI 、LOGO、平面。\n3、設計產品包裝、彩盒、廣告印刷品。\n4、設計網站版型(不需寫程式)。\n5、After Effects動畫設計。\n6、熟Premiere。', '【公司福利】\n1.勞工保險。\n2.員工健康保險。\n3.勞工保險退休金。\n4.結婚禮金。\n5.特休及年假。\n6.教育訓練。', '【相關條件】\n- 接受身份：上班族\n- 工作經歷：不拘\n- 學歷要求：大學以上\n- 公司產業：網際網路相關業\n- 科系要求：美術學相關、藝術商業設計、美術工藝相關\n- 語文條件：不拘\n- 擅長工具：After Effects、Adobe Photoshop、Illustrator\n- 工作技能：產品包裝設計、設計印刷基本認知\n', 'on'),
(43, '品牌行銷企劃實習', 18, 6, 10, '台北市內湖區大湖山莊街120巷1號', '2020-12-02 00:33:04', '2021-02-01', '2021-04-01', '【工作內容】\n1. 建立、推廣、經營與管理現有品牌以及公司整體的形象，並負責相關文宣資料的規劃。\n2. 建立、分析現有顧客與潛在顧客資料，並發展顧客維繫方案。\n3. 進行產業競爭分析及市場調查分析(數據整理分析)。\n4. 網路行銷企劃、社群網站經營，具備社群議題操作的能力及經驗，並能掌握時下趨勢(Facebook、PTT、Youtube、LINE、LINE@、Google+、WeChat等等) 並對活動效益進行分析與建議，有效傳遞行銷內容。\n6. 業績報表提列與數據分析。\n7. 品牌異業合作 資源整合及新事業規劃。\n8. 熟悉各種行銷工具的應用及行銷計劃效益分析與建議。', '【公司福利】\n- 工作待遇：月薪 28,000~38,000元\n● 完整休假制度(年假/婚假/陪產假/家庭照顧假/女性同仁生理假等)\n● 享勞工保險、全民健保及勞工退休金提繳\n● 考核績優獎勵獎金/三節獎金或禮品\n● 生育禮金&結婚禮金\n● 年度活動(中秋饗宴/春酒抽獎等)\n● 員工完整在職教育訓練(銷售技巧/商品知識/客戶服務等)\n● 人性化管理之升遷轉職制度\n● 員工購物折扣優惠\n', '【條件要求】\n1.有女裝品牌、女裝購物網工作經驗者佳\n2.具備專案管理與執行能力\n3.愛時尚、具有流行靈敏度\n', 'on'),
(44, '網頁設計助理', 19, 1, 63, '台中市太平區太平13街5-5號', '2020-12-02 00:40:19', '2021-02-01', '2021-03-30', '[職務說明]\n◆ 本職缺為全職職缺\n◆ 熟悉 HTML5、CSS3等標準規範。\n◆ 熟悉主流瀏覽器(Chrome、Firefox、Safari、IE)版面切版及RWD。\n◆ 會修圖，使用AI , PS.\n◆ 有使用過jquery，熟悉較佳，或進公司後培訓\n◆ 具備解決問題的能力，及良好團隊合作觀念，易溝通。', '【薪資及薪獎制度】\n◆ 年終獎金一個月起（按到職日比例計算）\n◆ 明確的薪資範圍及升遷制度\n◆ 績效獎金與專案獎金（年度營運及個人績效而定）\n◆ 三節禮金、生日禮金、聖誕禮物自選\n', '【相關條件】\n- 擅長工具：HTML、JavaScript、jQuery、CSS、Adobe Photoshop、Illustrator\n- 工作技能：繪圖工具與軟體操作、使用者介面設計、網頁軟體操作、網頁語法撰寫', 'on'),
(45, '實習後端工程師', 20, 1, 3, '台北市中山區松江路152號3F', '2020-12-02 09:39:15', '2021-01-01', '2021-02-28', '【工作內容】\n• 資訊相關科系 大三大四生或剛畢業者尤佳\n• 熟悉javascript, Git版控尤佳\n', '●實習福利制度：\n1.訓練計畫：我們不只提供實習，更給予專業培訓，若無快速學習能力、學習熱誠者，請審慎申請\n2.獎助學金：工作態度及格者，將提供獎助學金五千元，非台中人另提供住宿或交通津貼(最高五千)，表現優秀者可申請留任獎助學金兩萬元。', '【相關條件】\n- 科系要求：資訊工程相關\n- 語文條件：不拘\n- 擅長工具：JavaScript、jQuery、CSS、Node.js、D3.js\n- 工作技能：資料庫程式設計', 'on');

-- --------------------------------------------------------

--
-- 資料表結構 `jobapply`
--

CREATE TABLE `jobapply` (
  `jobAppyId` int(11) NOT NULL,
  `memberId` int(11) DEFAULT NULL,
  `jobId` int(11) DEFAULT NULL,
  `resumeId` int(11) DEFAULT NULL,
  `msgForCompany` text DEFAULT NULL,
  `companyReply` varchar(20) NOT NULL DEFAULT 'notviewed',
  `companyReplyMsg` text DEFAULT NULL,
  `applyDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `jobapply`
--

INSERT INTO `jobapply` (`jobAppyId`, `memberId`, `jobId`, `resumeId`, `msgForCompany`, `companyReply`, `companyReplyMsg`, `applyDate`) VALUES
(5, 1, 9, 26, 's', 'invite', 'bee', '2020-11-12'),
(6, 1, 5, 25, '', 'notviewed', NULL, '2020-11-15'),
(7, 13, 14, 31, '', 'reject', 'nope', '2020-11-29'),
(8, 1, 14, 26, 'aaa', 'notviewed', NULL, '2020-11-30'),
(9, 21, 14, 33, 's', 'notviewed', NULL, '2020-11-30'),
(10, 1, 35, 34, 'w', 'notviewed', NULL, '2020-12-01'),
(11, 1, 40, 34, 'JS ES6+', 'invite', 'ReyHong你好！\n我在我們的實習趣上看到了您投遞的簡歷,\n我們公司經過一個初步審核覺得您比較適合我們公司,\n通知你12/20 p.m 2:00來參加我們公司的統一面試。', '2020-12-02'),
(12, 23, 47, 44, '1234', 'invite', '123456', '2020-12-02'),
(13, 1, 38, 34, '555', 'reject', '88', '2020-12-02'),
(14, 1, 43, 36, 's', 'notviewed', NULL, '2020-12-02');

-- --------------------------------------------------------

--
-- 資料表結構 `jobclass`
--

CREATE TABLE `jobclass` (
  `jobClassId` int(11) NOT NULL,
  `jobClassName` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `jobclass`
--

INSERT INTO `jobclass` (`jobClassId`, `jobClassName`) VALUES
(1, '軟體工程'),
(2, '工程研發'),
(3, '行政總務'),
(4, '財會稅務'),
(5, '金融專業'),
(6, '行銷廣告'),
(7, '產品企劃'),
(8, '專案管理'),
(9, '門市管理'),
(10, '業務銷售'),
(11, '貿易船務'),
(12, '客戶服務'),
(13, '旅遊休閒'),
(14, '美容美髮'),
(15, '維修服務'),
(16, '經營幕僚'),
(17, '人力資源'),
(18, '製程規劃'),
(19, '品管安規'),
(20, '環境衛生'),
(21, '營建規劃'),
(22, '製圖測量'),
(23, '藝術設計'),
(24, '傳播藝術'),
(25, '文字編譯'),
(26, '傳媒採訪'),
(27, '學術研究'),
(28, '教育輔導'),
(29, '餐飲專業'),
(30, '採購倉管'),
(31, '運輸物流'),
(32, '醫療專業'),
(33, '軍警消防'),
(34, '其他專業');

-- --------------------------------------------------------

--
-- 資料表結構 `major`
--

CREATE TABLE `major` (
  `majorId` int(11) NOT NULL,
  `majorClass` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `major`
--

INSERT INTO `major` (`majorId`, `majorClass`) VALUES
(1, '資訊'),
(2, '工程'),
(3, '數理化學'),
(4, '醫藥衛生'),
(5, '生命科學'),
(6, '生物資源'),
(7, '管理'),
(8, '財經'),
(9, '法政'),
(10, '社會與心理'),
(11, '外語'),
(12, '文史哲'),
(13, '建築與設計'),
(14, '藝術'),
(15, '教育'),
(16, '大眾傳播'),
(17, '遊憩與運動'),
(18, '地球與環境');

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `memberId` int(11) NOT NULL,
  `memberAccount` varchar(20) DEFAULT NULL,
  `memberPassword` varchar(20) DEFAULT NULL,
  `memberName` varchar(20) DEFAULT NULL,
  `memberGender` varchar(10) DEFAULT NULL,
  `memberBirth` date DEFAULT NULL,
  `memberEmail` varchar(20) DEFAULT NULL,
  `memberPhone` varchar(10) DEFAULT NULL,
  `memberCreateTime` date DEFAULT NULL,
  `memberCheck` varchar(10) DEFAULT NULL,
  `schoolId` int(11) DEFAULT NULL,
  `majorId` int(11) DEFAULT NULL,
  `majorName` varchar(50) DEFAULT NULL,
  `studentCardFront` varchar(225) DEFAULT NULL,
  `studentCardBack` varchar(225) DEFAULT NULL,
  `memberAvatar` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`memberId`, `memberAccount`, `memberPassword`, `memberName`, `memberGender`, `memberBirth`, `memberEmail`, `memberPhone`, `memberCreateTime`, `memberCheck`, `schoolId`, `majorId`, `majorName`, `studentCardFront`, `studentCardBack`, `memberAvatar`) VALUES
(1, 'leo20xx', '1', 'ReyHong', '男', '1994-10-13', 'leo266470@gmail.com', '0910528147', '2020-11-07', 'approved', 1, 1, '資訊工程學系', '', NULL, '1606964095955-028-gardener-1.png'),
(2, 'aaa12345', '1234', '史密斯', NULL, NULL, 'smith@edsmail.com', '0970588699', NULL, 'pending', 1, 1, '數學系', '', NULL, NULL),
(13, 'zxc123', '1234', '何伯仁', NULL, NULL, 'gggge@xxaa.mail', '0970588771', '2020-11-24', 'pending', 5, 2, '機械工程學系', '1606271870083-1.jpg', '1606271870085-1.jpg', '1606531856267-bee.png'),
(16, 'qwe111', '1234', '哈士奇', '女', '0000-00-00', 'h@uski.com', '28818845', '2020-11-25', 'pending', 4, 4, '醫學系', '1606284870343-front.png', '1606284870349-back.png', NULL),
(17, '21321321', '123', '45', '男', '2020-11-04', '1', '455', '2020-11-25', 'pending', 51, 3, '數學系', '1606284985861-front.png', '1606284985865-back.png', NULL),
(18, 'zxc090', '123', '123', '男', '2020-11-03', '123', '123', '2020-11-26', 'pending', 26, 1, '企業管理系', '1606362543112-bee.png', '1606362543115-stock-photo-cute-cartoon-kitten-taking-power-nap-with-charging-battery-kawaii-sleeping-cat-drawing-clip-art-1790302490.jpg', NULL),
(19, 'testnew1', '1', 'SmithHong', '男', '1999-01-28', 'www@xxmail.com', '0909471582', '2020-11-28', 'pending', 1, 3, '數學系', '1606531512711-smile.png', '1606531512713-stock-photo-cute-cartoon-kitten-taking-power-nap-with-charging-battery-kawaii-sleeping-cat-drawing-clip-art-1790302490.jpg', NULL),
(20, 'asd1', '1', '洪瑞陽', '男', '1997-01-31', 'A@gmail.com', '0909123456', '2020-11-30', 'pending', 1, 1, '資工系', '1606703952601-bee.png', '1606703952603-hi (1).png', NULL),
(21, 'aaa', 'aa', 'a', '男', '2020-11-02', 'a', 'a', '2020-11-30', 'pending', 27, 3, 'a', '1606705196862-bee.png', '1606705196864-hi (5).png', NULL),
(23, 'zxcv123', '1', 'JasonChen', '男', '1995-10-13', 'json1@gxmail.com', '0912789547', '2020-12-02', 'pending', 1, 1, '資訊工程學系', '1606875117481-front.png', '1606875117484-back.png', '1606875145004-avatar.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `memberstudentcard`
--

CREATE TABLE `memberstudentcard` (
  `memberStudentCardId` int(11) NOT NULL,
  `memberId` int(11) DEFAULT NULL,
  `studentCardFront` mediumblob DEFAULT NULL,
  `studentCardBack` mediumblob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `resume`
--

CREATE TABLE `resume` (
  `resumeId` int(11) NOT NULL,
  `memberId` int(11) DEFAULT NULL,
  `resumeName` varchar(50) DEFAULT NULL,
  `resumeEmail` varchar(50) DEFAULT NULL,
  `resumePhone` varchar(10) DEFAULT NULL,
  `resumeSkill` text DEFAULT NULL,
  `resumeFile` varchar(225) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `resume`
--

INSERT INTO `resume` (`resumeId`, `memberId`, `resumeName`, `resumeEmail`, `resumePhone`, `resumeSkill`, `resumeFile`) VALUES
(30, 19, 'ws', 'www@xxmail.com', '0909471582', 'w', '1606532960384-rec-010(課表)第四個月(1026-1122) (1).pdf'),
(31, 13, 'forone', 'gggge@xxaa.mail', '0970588771', 'SK', '1606572772525-03_洪瑞陽.pdf'),
(32, 20, 'sss', 'A@gmail.com', '0909123456', 's', '1606704142055-rec-010(課表)第四個月(1026-1122) (1).pdf'),
(34, 1, '前端工程師履歷改', 'leo266470@gmail.com', '0910528147', 'CSS\nHTML \nPHP\nJS ES6+\nREACT', '1606845050214-demo2.pdf'),
(35, 1, '前端工程師2', 'leo266470@gmail.com', '0910528147', 'test', '1606800050238-Ekman Hsieh｜CakeResume.pdf'),
(36, 1, '基本軟體工程履歷', 'leo266470@gmail.com', '0910528147', '1', '1606800964834-Ekman Hsieh｜CakeResume.pdf'),
(39, 1, 'zz', 'leo266470@gmail.com', '0910528147', 'zz', '1606828795296-Ekman Hsieh｜CakeResume.pdf'),
(41, 21, '0aaa', 'a', 'a', 'aa', '1606828853382-Ekman Hsieh｜CakeResume.pdf'),
(43, 21, 'aaaa', 'a', 'a', 'aaa', '1606828991822-Ekman Hsieh｜CakeResume.pdf'),
(44, 23, 'sss', 'json1@gxmail.com', '0912789547', '1234', '1606875178587-demo1.pdf');

-- --------------------------------------------------------

--
-- 資料表結構 `school`
--

CREATE TABLE `school` (
  `schoolId` int(11) NOT NULL,
  `cityId` int(11) DEFAULT NULL,
  `schoolName` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `school`
--

INSERT INTO `school` (`schoolId`, `cityId`, `schoolName`) VALUES
(1, 1, '國立臺灣大學'),
(2, 1, '國立政治大學'),
(3, 1, '國立臺灣師範大學'),
(4, 1, '國立陽明大學'),
(5, 1, '國立臺灣科技大學'),
(6, 1, '國立臺北科技大學'),
(7, 1, '國立臺北藝術大學'),
(8, 1, '國立臺北教育大學'),
(9, 1, '國立臺北護理健康大學'),
(10, 1, '國立臺北商業大學'),
(11, 1, '國立臺灣戲曲學院'),
(12, 1, '臺北市立大學'),
(13, 1, '東吳大學'),
(14, 1, '中國文化大學'),
(15, 1, '世新大學'),
(16, 1, '銘傳大學'),
(17, 1, '實踐大學'),
(18, 1, '大同大學'),
(19, 1, '臺北醫學大學'),
(20, 1, '中國科技大學'),
(21, 1, '德明財經科技大學'),
(22, 1, '中華科技大學'),
(23, 1, '臺北城市科技大學'),
(24, 1, '康寧大學'),
(25, 2, '國立臺北大學'),
(26, 2, '國立臺灣藝術大學'),
(27, 2, '國立空中大學'),
(28, 2, '輔仁大學'),
(29, 2, '淡江大學'),
(30, 2, '華梵大學'),
(31, 2, '真理大學'),
(32, 2, '明志科技大學'),
(33, 2, '聖約翰科技大學'),
(34, 2, '景文科技大學'),
(35, 2, '東南科技大學'),
(36, 2, '醒吾科技大學'),
(37, 2, '華夏科技大學'),
(38, 2, '致理科技大學'),
(39, 2, '宏國德霖科技大學'),
(40, 2, '台北海洋科技大學'),
(41, 2, '亞東技術學院'),
(42, 2, '黎明技術學院'),
(43, 2, '馬偕醫學院'),
(44, 2, '法鼓文理學院'),
(45, 2, '馬偕醫護管理專科學校'),
(46, 2, '耕莘健康管理專科學校'),
(47, 2, '臺北基督學院'),
(48, 3, '國立中央大學'),
(49, 3, '國立體育大學'),
(50, 3, '中原大學'),
(51, 3, '長庚大學'),
(52, 3, '元智大學'),
(53, 3, '龍華科技大學'),
(54, 3, '健行科技大學'),
(55, 3, '萬能科技大學'),
(56, 3, '開南大學'),
(57, 3, '長庚科技大學'),
(58, 3, '南亞技術學院'),
(59, 3, '新生醫護管理專科學校'),
(60, 4, '國立中興大學'),
(61, 4, '國立臺中教育大學'),
(62, 4, '國立勤益科技大學'),
(63, 4, '國立臺灣體育運動大學'),
(64, 4, '國立臺中科技大學'),
(65, 4, '東海大學'),
(66, 4, '逢甲大學'),
(67, 4, '靜宜大學'),
(68, 4, '朝陽科技大學'),
(69, 4, '中山醫學大學'),
(70, 4, '弘光科技大學'),
(71, 4, '中國醫藥大學'),
(72, 4, '嶺東科技大學'),
(73, 4, '中臺科技大學'),
(74, 4, '亞洲大學'),
(75, 4, '僑光科技大學'),
(76, 4, '修平科技大學'),
(77, 5, '國立成功大學'),
(78, 5, '國立臺南藝術大學'),
(79, 5, '國立臺南大學'),
(80, 5, '國立臺南護理專科學校'),
(81, 5, '南臺科技大學'),
(82, 5, '崑山科技大學'),
(83, 5, '嘉南藥理大學'),
(84, 5, '長榮大學'),
(85, 5, '台南應用科技大學'),
(86, 5, '遠東科技大學'),
(87, 5, '中華醫事科技大學'),
(88, 5, '台灣首府大學'),
(89, 5, '中信金融管理學院'),
(90, 5, '敏惠醫護管理專科學校'),
(91, 6, '國立中山大學'),
(92, 6, '國立高雄師範大學'),
(93, 6, '國立高雄大學'),
(94, 6, '國立高雄餐旅大學'),
(95, 6, '國立高雄科技大學'),
(96, 6, '義守大學'),
(97, 6, '高雄醫學大學'),
(98, 6, '樹德科技大學'),
(99, 6, '輔英科技大學'),
(100, 6, '正修科技大學'),
(101, 6, '高苑科技大學'),
(102, 6, '文藻外語大學'),
(103, 6, '東方設計大學'),
(104, 6, '和春技術學院'),
(105, 6, '樹人醫護管理專科學校'),
(106, 6, '育英醫護管理專科學校'),
(107, 6, '高雄市立空中大學'),
(108, 7, '國立臺灣海洋大學'),
(109, 7, '崇右影藝科技大學'),
(110, 7, '經國管理暨健康學院'),
(111, 8, '國立清華大學'),
(112, 8, '國立交通大學'),
(113, 8, '中華大學'),
(114, 8, '玄奘大學'),
(115, 8, '元培醫事科技大學'),
(116, 9, '國立嘉義大學'),
(117, 9, '大同技術學院'),
(118, 10, '明新科技大學'),
(119, 10, '大華科技大學'),
(120, 11, '國立聯合大學'),
(121, 11, '育達科技大學'),
(122, 11, '仁德醫護管理專科學校'),
(123, 12, '國立彰化師範大學'),
(124, 12, '大葉大學'),
(125, 12, '建國科技大學'),
(126, 12, '明道大學'),
(127, 12, '中州科技大學'),
(128, 13, '國立暨南國際大學'),
(129, 13, '南開科技大學'),
(130, 14, '國立雲林科技大學'),
(131, 14, '國立虎尾科技大學'),
(132, 14, '環球科技大學'),
(133, 15, '國立中正大學'),
(134, 15, '南華大學'),
(135, 15, '吳鳳科技大學'),
(136, 15, '稻江科技暨管理學院'),
(137, 15, '崇仁醫護管理專科學校'),
(138, 16, '國立屏東科技大學'),
(139, 16, '國立屏東大學'),
(140, 16, '大仁科技大學'),
(141, 16, '美和科技大學'),
(142, 16, '慈惠醫護管理專科學校'),
(143, 17, '國立宜蘭大學'),
(144, 17, '佛光大學'),
(145, 17, '蘭陽技術學院'),
(146, 17, '聖母醫護管理專科學校'),
(147, 18, '國立東華大學'),
(148, 18, '慈濟大學'),
(149, 18, '慈濟科技大學'),
(150, 18, '大漢技術學院'),
(151, 18, '臺灣觀光學院'),
(152, 19, '國立臺東大學'),
(153, 19, '國立臺東專科學校'),
(154, 20, '國立澎湖科技大學'),
(155, 21, '國立金門大學');

-- --------------------------------------------------------

--
-- 資料表結構 `townlist`
--

CREATE TABLE `townlist` (
  `townshipId` int(11) NOT NULL,
  `cityId` int(11) DEFAULT NULL,
  `townshipName` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `townlist`
--

INSERT INTO `townlist` (`townshipId`, `cityId`, `townshipName`) VALUES
(1, 1, '中正區'),
(2, 1, '大同區'),
(3, 1, '中山區'),
(4, 1, '松山區'),
(5, 1, '大安區'),
(6, 1, '萬華區'),
(7, 1, '信義區'),
(8, 1, '士林區'),
(9, 1, '北投區'),
(10, 1, '內湖區'),
(11, 1, '南港區'),
(12, 1, '文山區'),
(13, 2, '板橋區'),
(14, 2, '汐止區'),
(15, 2, '深坑區'),
(16, 2, '石碇區'),
(17, 2, '瑞芳區'),
(18, 2, '平溪區'),
(19, 2, '雙溪區'),
(20, 2, '貢寮區'),
(21, 2, '新店區'),
(22, 2, '坪林區'),
(23, 2, '烏來區'),
(24, 2, '永和區'),
(25, 2, '中和區'),
(26, 2, '土城區'),
(27, 2, '三峽區'),
(28, 2, '樹林區'),
(29, 2, '鶯歌區'),
(30, 2, '三重區'),
(31, 2, '新莊區'),
(32, 2, '泰山區'),
(33, 2, '林口區'),
(34, 2, '蘆洲區'),
(35, 2, '五股區'),
(36, 2, '八里區'),
(37, 2, '淡水區'),
(38, 2, '三芝區'),
(39, 2, '石門區'),
(40, 2, '萬里區'),
(41, 2, '金山區'),
(42, 3, '中壢區'),
(43, 3, '平鎮區'),
(44, 3, '龍潭區'),
(45, 3, '楊梅區'),
(46, 3, '新屋區'),
(47, 3, '觀音區'),
(48, 3, '桃園區'),
(49, 3, '龜山區'),
(50, 3, '八德區'),
(51, 3, '大溪區'),
(52, 3, '復興區'),
(53, 3, '大園區'),
(54, 3, '蘆竹區'),
(55, 4, '中區'),
(56, 4, '東區'),
(57, 4, '南區'),
(58, 4, '西區'),
(59, 4, '北區'),
(60, 4, '北屯區'),
(61, 4, '西屯區'),
(62, 4, '南屯區'),
(63, 4, '太平區'),
(64, 4, '大里區'),
(65, 4, '霧峰區'),
(66, 4, '烏日區'),
(67, 4, '豐原區'),
(68, 4, '后里區'),
(69, 4, '石岡區'),
(70, 4, '東勢區'),
(71, 4, '和平區'),
(72, 4, '新社區'),
(73, 4, '潭子區'),
(74, 4, '大雅區'),
(75, 4, '神岡區'),
(76, 4, '大肚區'),
(77, 4, '沙鹿區'),
(78, 4, '龍井區'),
(79, 4, '梧棲區'),
(80, 4, '清水區'),
(81, 4, '大甲區'),
(82, 4, '外埔區'),
(83, 4, '大安區'),
(84, 5, '中西區'),
(85, 5, '東區'),
(86, 5, '南區'),
(87, 5, '北區'),
(88, 5, '安平區'),
(89, 5, '安南區'),
(90, 5, '永康區'),
(91, 5, '歸仁區'),
(92, 5, '新化區'),
(93, 5, '左鎮區'),
(94, 5, '玉井區'),
(95, 5, '楠西區'),
(96, 5, '南化區'),
(97, 5, '仁德區'),
(98, 5, '關廟區'),
(99, 5, '龍崎區'),
(100, 5, '官田區'),
(101, 5, '麻豆區'),
(102, 5, '佳里區'),
(103, 5, '西港區'),
(104, 5, '七股區'),
(105, 5, '將軍區'),
(106, 5, '學甲區'),
(107, 5, '北門區'),
(108, 5, '新營區'),
(109, 5, '後壁區'),
(110, 5, '白河區'),
(111, 5, '東山區'),
(112, 5, '六甲區'),
(113, 5, '下營區'),
(114, 5, '柳營區'),
(115, 5, '鹽水區'),
(116, 5, '善化區'),
(117, 5, '大內區'),
(118, 5, '山上區'),
(119, 5, '新市區'),
(120, 5, '安定區'),
(121, 6, '新興區'),
(122, 6, '前金區'),
(123, 6, '苓雅區'),
(124, 6, '鹽埕區'),
(125, 6, '鼓山區'),
(126, 6, '旗津區'),
(127, 6, '前鎮區'),
(128, 6, '三民區'),
(129, 6, '楠梓區'),
(130, 6, '小港區'),
(131, 6, '左營區'),
(132, 6, '仁武區'),
(133, 6, '大社區'),
(134, 6, '東沙群島'),
(135, 6, '南沙群島'),
(136, 6, '岡山區'),
(137, 6, '路竹區'),
(138, 6, '阿蓮區'),
(139, 6, '田寮區'),
(140, 6, '燕巢區'),
(141, 6, '橋頭區'),
(142, 6, '梓官區'),
(143, 6, '彌陀區'),
(144, 6, '永安區'),
(145, 6, '湖內區'),
(146, 6, '鳳山區'),
(147, 6, '大寮區'),
(148, 6, '林園區'),
(149, 6, '鳥松區'),
(150, 6, '大樹區'),
(151, 6, '旗山區'),
(152, 6, '美濃區'),
(153, 6, '六龜區'),
(154, 6, '內門區'),
(155, 6, '杉林區'),
(156, 6, '甲仙區'),
(157, 6, '桃源區'),
(158, 6, '那瑪夏區'),
(159, 6, '茂林區'),
(160, 6, '茄萣區'),
(161, 7, '仁愛區'),
(162, 7, '信義區'),
(163, 7, '中正區'),
(164, 7, '中山區'),
(165, 7, '安樂區'),
(166, 7, '暖暖區'),
(167, 7, '七堵區'),
(168, 8, '東區'),
(169, 8, '北區'),
(170, 8, '香山區'),
(171, 9, '東區'),
(172, 9, '西區'),
(173, 10, '竹北市'),
(174, 10, '湖口鄉'),
(175, 10, '新豐鄉'),
(176, 10, '新埔鎮'),
(177, 10, '關西鎮'),
(178, 10, '芎林鄉'),
(179, 10, '寶山鄉'),
(180, 10, '竹東鎮'),
(181, 10, '五峰鄉'),
(182, 10, '橫山鄉'),
(183, 10, '尖石鄉'),
(184, 10, '北埔鄉'),
(185, 10, '峨眉鄉'),
(186, 11, '竹南鎮'),
(187, 11, '頭份市'),
(188, 11, '三灣鄉'),
(189, 11, '南庄鄉'),
(190, 11, '獅潭鄉'),
(191, 11, '後龍鎮'),
(192, 11, '通霄鎮'),
(193, 11, '苑裡鎮'),
(194, 11, '苗栗市'),
(195, 11, '造橋鄉'),
(196, 11, '頭屋鄉'),
(197, 11, '公館鄉'),
(198, 11, '大湖鄉'),
(199, 11, '泰安鄉'),
(200, 11, '銅鑼鄉'),
(201, 11, '三義鄉'),
(202, 11, '西湖鄉'),
(203, 11, '卓蘭鎮'),
(204, 12, '彰化市'),
(205, 12, '芬園鄉'),
(206, 12, '花壇鄉'),
(207, 12, '秀水鄉'),
(208, 12, '鹿港鎮'),
(209, 12, '福興鄉'),
(210, 12, '線西鄉'),
(211, 12, '和美鎮'),
(212, 12, '伸港鄉'),
(213, 12, '員林市'),
(214, 12, '社頭鄉'),
(215, 12, '永靖鄉'),
(216, 12, '埔心鄉'),
(217, 12, '溪湖鎮'),
(218, 12, '大村鄉'),
(219, 12, '埔鹽鄉'),
(220, 12, '田中鎮'),
(221, 12, '北斗鎮'),
(222, 12, '田尾鄉'),
(223, 12, '埤頭鄉'),
(224, 12, '溪州鄉'),
(225, 12, '竹塘鄉'),
(226, 12, '二林鎮'),
(227, 12, '大城鄉'),
(228, 12, '芳苑鄉'),
(229, 12, '二水鄉'),
(230, 13, '南投市'),
(231, 13, '中寮鄉'),
(232, 13, '草屯鎮'),
(233, 13, '國姓鄉'),
(234, 13, '埔里鎮'),
(235, 13, '仁愛鄉'),
(236, 13, '名間鄉'),
(237, 13, '集集鎮'),
(238, 13, '水里鄉'),
(239, 13, '魚池鄉'),
(240, 13, '信義鄉'),
(241, 13, '竹山鎮'),
(242, 13, '鹿谷鄉'),
(243, 14, '斗南鎮'),
(244, 14, '大埤鄉'),
(245, 14, '虎尾鎮'),
(246, 14, '土庫鎮'),
(247, 14, '褒忠鄉'),
(248, 14, '東勢鄉'),
(249, 14, '臺西鄉'),
(250, 14, '崙背鄉'),
(251, 14, '麥寮鄉'),
(252, 14, '斗六市'),
(253, 14, '林內鄉'),
(254, 14, '古坑鄉'),
(255, 14, '莿桐鄉'),
(256, 14, '西螺鎮'),
(257, 14, '二崙鄉'),
(258, 14, '北港鎮'),
(259, 14, '水林鄉'),
(260, 14, '口湖鄉'),
(261, 14, '四湖鄉'),
(262, 14, '元長鄉'),
(263, 15, '番路鄉'),
(264, 15, '梅山鄉'),
(265, 15, '竹崎鄉'),
(266, 15, '阿里山鄉'),
(267, 15, '中埔鄉'),
(268, 15, '大埔鄉'),
(269, 15, '水上鄉'),
(270, 15, '鹿草鄉'),
(271, 15, '太保市'),
(272, 15, '朴子市'),
(273, 15, '東石鄉'),
(274, 15, '六腳鄉'),
(275, 15, '新港鄉'),
(276, 15, '民雄鄉'),
(277, 15, '大林鎮'),
(278, 15, '溪口鄉'),
(279, 15, '義竹鄉'),
(280, 15, '布袋鎮'),
(281, 16, '屏東市'),
(282, 16, '三地門鄉'),
(283, 16, '霧臺鄉'),
(284, 16, '瑪家鄉'),
(285, 16, '九如鄉'),
(286, 16, '里港鄉'),
(287, 16, '高樹鄉'),
(288, 16, '鹽埔鄉'),
(289, 16, '長治鄉'),
(290, 16, '麟洛鄉'),
(291, 16, '竹田鄉'),
(292, 16, '內埔鄉'),
(293, 16, '萬丹鄉'),
(294, 16, '潮州鎮'),
(295, 16, '泰武鄉'),
(296, 16, '來義鄉'),
(297, 16, '萬巒鄉'),
(298, 16, '崁頂鄉'),
(299, 16, '新埤鄉'),
(300, 16, '南州鄉'),
(301, 16, '林邊鄉'),
(302, 16, '東港鎮'),
(303, 16, '琉球鄉'),
(304, 16, '佳冬鄉'),
(305, 16, '新園鄉'),
(306, 16, '枋寮鄉'),
(307, 16, '枋山鄉'),
(308, 16, '春日鄉'),
(309, 16, '獅子鄉'),
(310, 16, '車城鄉'),
(311, 16, '牡丹鄉'),
(312, 16, '恆春鎮'),
(313, 16, '滿州鄉'),
(314, 17, '宜蘭市'),
(315, 17, '頭城鎮'),
(316, 17, '礁溪鄉'),
(317, 17, '壯圍鄉'),
(318, 17, '員山鄉'),
(319, 17, '羅東鎮'),
(320, 17, '三星鄉'),
(321, 17, '大同鄉'),
(322, 17, '五結鄉'),
(323, 17, '冬山鄉'),
(324, 17, '蘇澳鎮'),
(325, 17, '南澳鄉'),
(326, 18, '花蓮市'),
(327, 18, '新城鄉'),
(328, 18, '秀林鄉'),
(329, 18, '吉安鄉'),
(330, 18, '壽豐鄉'),
(331, 18, '鳳林鎮'),
(332, 18, '光復鄉'),
(333, 18, '豐濱鄉'),
(334, 18, '瑞穗鄉'),
(335, 18, '萬榮鄉'),
(336, 18, '玉里鎮'),
(337, 18, '卓溪鄉'),
(338, 18, '富里鄉'),
(339, 19, '臺東市'),
(340, 19, '綠島鄉'),
(341, 19, '蘭嶼鄉'),
(342, 19, '延平鄉'),
(343, 19, '卑南鄉'),
(344, 19, '鹿野鄉'),
(345, 19, '關山鎮'),
(346, 19, '海端鄉'),
(347, 19, '池上鄉'),
(348, 19, '東河鄉'),
(349, 19, '成功鎮'),
(350, 19, '長濱鄉'),
(351, 19, '太麻里鄉'),
(352, 19, '金峰鄉'),
(353, 19, '大武鄉'),
(354, 19, '達仁鄉'),
(355, 20, '馬公市'),
(356, 20, '西嶼鄉'),
(357, 20, '望安鄉'),
(358, 20, '七美鄉'),
(359, 20, '白沙鄉'),
(360, 20, '湖西鄉'),
(361, 21, '金沙鎮'),
(362, 21, '金湖鎮'),
(363, 21, '金寧鄉'),
(364, 21, '金城鎮'),
(365, 21, '烈嶼鄉'),
(366, 21, '烏坵鄉'),
(367, 22, '南竿鄉'),
(368, 22, '北竿鄉'),
(369, 22, '莒光鄉'),
(370, 22, '東引鄉');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `citylist`
--
ALTER TABLE `citylist`
  ADD PRIMARY KEY (`cityId`);

--
-- 資料表索引 `collectlist`
--
ALTER TABLE `collectlist`
  ADD PRIMARY KEY (`collcetId`);

--
-- 資料表索引 `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`companyId`);

--
-- 資料表索引 `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`jobId`);

--
-- 資料表索引 `jobapply`
--
ALTER TABLE `jobapply`
  ADD PRIMARY KEY (`jobAppyId`);

--
-- 資料表索引 `jobclass`
--
ALTER TABLE `jobclass`
  ADD PRIMARY KEY (`jobClassId`);

--
-- 資料表索引 `major`
--
ALTER TABLE `major`
  ADD PRIMARY KEY (`majorId`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`memberId`);

--
-- 資料表索引 `memberstudentcard`
--
ALTER TABLE `memberstudentcard`
  ADD PRIMARY KEY (`memberStudentCardId`);

--
-- 資料表索引 `resume`
--
ALTER TABLE `resume`
  ADD PRIMARY KEY (`resumeId`);

--
-- 資料表索引 `school`
--
ALTER TABLE `school`
  ADD PRIMARY KEY (`schoolId`);

--
-- 資料表索引 `townlist`
--
ALTER TABLE `townlist`
  ADD PRIMARY KEY (`townshipId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `citylist`
--
ALTER TABLE `citylist`
  MODIFY `cityId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `collectlist`
--
ALTER TABLE `collectlist`
  MODIFY `collcetId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `company`
--
ALTER TABLE `company`
  MODIFY `companyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `job`
--
ALTER TABLE `job`
  MODIFY `jobId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `jobapply`
--
ALTER TABLE `jobapply`
  MODIFY `jobAppyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `jobclass`
--
ALTER TABLE `jobclass`
  MODIFY `jobClassId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `major`
--
ALTER TABLE `major`
  MODIFY `majorId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `memberId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `memberstudentcard`
--
ALTER TABLE `memberstudentcard`
  MODIFY `memberStudentCardId` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `resume`
--
ALTER TABLE `resume`
  MODIFY `resumeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `school`
--
ALTER TABLE `school`
  MODIFY `schoolId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `townlist`
--
ALTER TABLE `townlist`
  MODIFY `townshipId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=371;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
