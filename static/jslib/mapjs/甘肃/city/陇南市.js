(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('陇南市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"621221","properties":{"name":"成县","cp":[105.734434,33.739863],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@LNDDDDFFDJHDHDLDH@L@H@JDFFHFDDDBF@FBBJDDFBHBH@B@DEFCDAJ@J@FADEBG@E@ACA@A@@@AAE@E@ABABAD@BA@ABABE@A@EDEBA@@B@BADEHKHIDG@CCGKG@IDKEKCGAMEEAAMAKEC@GBAB@@EAGCCCBEBEACA@@CDANEDCEEAC@CBE@GGABCEGEG@A@CDE@ECIHI@A@CBAB@DADBBFDBFHB@FBDFBBF@F@FCBABERWBCDCBAAGDC@@EACAC@@AF@@ABAN@HCFBB@BE@@@@D@BCBC@@DAHGDG@CAEGG@@KB@@AADEBC@CCCBCJEHCJCL@J@\\CJALBNBFBLBNDJDHBHDJBNDNDF@FCDAFEDCBEBEDGDIBEDGBEDEDE@EBIBCBCDEDCDCJEFAD@LAJ@HAHEBCFIBE@GACAGEIEGIEAGEECE@ABA@@AA@@@A@AA@@A@@BABABA@@ACAC@@BAB@@@BABAB@F@B@B@B@DAD@BA@@BA@AEEAC@@@A@@B@@A@A@CACA@AC@EB@BAAA@@AACCCCAEGK@E@ABA@AAA@I@@BADAHBN@@@JEDA@AA@AC@C@AF@HG@CCMBC@@@EBEBE@CAA@@LKAEAABEAAAEAEACCCCCECCAACCECGEEACECCEECCCKIICS@EBG@ECACCECOCCICGCEBUFDSZ]VS^M@_QYTA@A@@@SFME@@@@eQCWcAYWyQIFKX_@MMIBMTkDoJ^]hQFQ@@@@@A@@@@@Q@@@@@GB@@@@S@dIJEDGACBCDAD@D@DBDD@D@FBB@JCH@J@JBB@CDIFGFCBIBEDCDEACAACCECCCA@CCAG@EBIFGDG@GBEBCDEF@@KHA@@@FFJ@D@BBDBHBB@HBDBFDHDDBB@@BEAC@E@E@CBA@@BDHDHDFFFFH@DDFLHDLFFFJDHDHDHDHBHDFBHFHDFDFBDBFBHBF@JBFBJ@FBF@FBDDHFDHFJDHFFDDFFHBHBL@HBHAPAJAJAN@NALAJ@NCL@LCL@JBH@LALBL@JBJFHFJFDFDFHHDLHLDNBJ@P@PBN@LBL@H@RBNAH@N@HBPFHNBJJJFFFLLLHHJLDFD@"],"encodeOffsets":[[108175,34814]]}},{"type":"Feature","id":"621222","properties":{"name":"文县","cp":[104.682448,32.942171],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@NDJ@L@J@J@JBLBHALDJBHBLBJAJAJAHCLCHCHEFEFIDGDEBCFGDCHEFCDALCL@F@JCLEHEHEFCFGHEJIFGJGJEHCHEDCHEFEHGHIHIDEHGHGJIHEHEDCHIFAF@N@RC@A@AACCMBABE@A@AAECEACACCEQEECEACAEACACC@A@CFCDC@A@CCA@C@ABEDCHGBEDGDEDCBG@K@GAIAG@C@C@C@CCCCC@EBE@CAE@G@GAGCECEGCG@GEIECCGEAE@K@GDEHGHGFEL]@EAEDERU@G@EBE@G@CDGBEDCJIFCFAFAJAF@BAHIFGHCJEFAFEFEDEFIFEHCHCNAH@BA@CDCBABEAA@ABAB@BA@ADCHGBABBD@D@B@DEBAB@FAB@@A@A@IAI@EACAA@ABAD@F@F@BADEBABEDAD@DCD@DCBADBDDFBHDB@BF@D@B@BDDBFFHFPBBLCFDFFBDF@D@FAD@D@H@HBD@D@DADEBGBE@G@EBABAD@D@DBDBBHBDDDFHBHBDDDFBFDDFBLBFDFBHCFBBFDHBHDFDD@DADCDGDCFAJEDC@EBABCBABABAFO@EFEFENCFADCBCBE@C@E@C@CFCHIHCFCFMBCAGBABCBC@C@C@ABABCBABABC@A@CBCBCDCDC@A@CBADCDCFAD@D@DFDDBFDHHCHAH@JBDDFFBDBHBFDF@D@D@F@F@BB@FABABA@@DBBBDB@BBARCJBJBHBBABABC@AB@BADAD@BABABABABAB@@A@A@AB@BA@A@@B@@A@@@@@@BABADC@ABA@@BA@A@@BC@@@CB@@ABA@A@AB@@@BA@@BC@C@ABAB@@A@A@@BA@@@A@ABC@A@ABCB@DA@GAEAC@A@@@AF@BAD@FAD@FBB@D@BABA@A@AAC@A@A@CBCBA@@B@B@DD@B@@@B@B@B@@BBBB@@B@D@BA@ABA@A@@@ADA@A@ABIBECCCAAA@A@G@GBA@A@AGAAAAAAACAC@GBCBG@E@C@C@E@CAEGGGCASGCACAECCACAC@E@ICQEABADCBA@CAECGIEGEACE@CGKCC@EACMGC@E@SCAGACC@G@Q@CECAGIAEEECAEAC@E@GBEBC@EAGAGCEACBA@CDEDQRKFC@CAIAIACBCBE@EACICGBWAK@ECCCAEAA@IAA@@A@@BCBA@AC@O@GAEAAAAG@A@CAAA@GBCBAAACACAAAAC@A@CAEAIAAACAA@EAC@C@AAA@ACAAAAE@EAG@AAA@A@AAMAGAC@A@GCC@CBABAD@@ABCDCBEDABABADAFADAFABCD@@@DGLABA@AD@BADEJA@CBK@GDABCDABCBGBE@I@E@C@GDEBODAAC@A@@AEGCACCCACACAE@GAA@CB@@A@EAC@CBEACAAAGECAEBC@C@C@E@ECIECCMECAEAGAGCC@EAEACAAACCACACEAE@G@ECGAAAEAC@A@C@K@I@EAEBECA@A@ADCDEFA@AD@F@FBJADCFADCDCDGDCBCBCBADABADGHADCDAJEBEBGFGDEDIBGAA@AA@CAGAAACECCAQEMGC@CBG@C@CAM@E@IDE@I@GCECGCEAECIACBABEFCDA@KHGDEJKPGHEHEFKDKCKGQEOCC@CBC@C@C@C@C@CAGAC@A@A@C@ABABABABCBABAB@@ADABABABCDA@EDEDABAD@BA@ABCBCBCBABEDC@CBC@EBCBC@CBABABABAD@BABAB@BADABAB@BAD@B@@BD@B@DAB@B@B@B@BABABA@GDCB@BAB@@CBABC@ABE@CBC@ABC@ABCBA@C@AACACACACACAEACAEAC@C@ABABA@ABAD@DABAB@DABAB@B@B@D@B@B@@A@C@A@AAA@CB@BAB@BADABBB@DAB@BA@A@EBC@GBE@C@A@C@CAA@CACAAACAE@CAC@AACAC@E@C@C@C@C@A@C@AB@B@B@BABABAB@BABCBABABADC@ABC@C@C@CBA@ABC@ABABC@ABC@AAC@AB@@@BBB@BBBB@@BBD@BAB@BABCBABA@CBA@CBC@CBC@CBC@CBABABCB@B@B@B@@@BAB@@A@ABCBC@ABEBABA@@BA@AB@BABCBCBABCBA@C@A@C@A@@BBB@B@B@B@D@BA@ABABA@AB@BAD@B@BC@ABABC@C@A@E@C@C@CBE@C@ABC@C@C@CAC@A@A@C@ABABCBA@A@C@CBCAABC@ABABABA@A@ABA@AAC@CAC@@@ADAD@BA@A@C@@BABBF@B@@@BA@AD@@@D@B@D@D@BAD@B@BAD@B@D@DAB@D@D@BAD@BCBAB@BABAB@D@BABBBAB@@CBABABAB@BAB@B@B@B@@@D@BAD@DBFBB@BDD@B@BBB@FBDBFDF@J@HBJ@HBF@DBBBBB@D@D@B@BB@B@BBDB@@BHDBBB@D@B@BADABADAHCF@B@B@B@DDFBD@FAD@HCFCHEBAD@DBD@F@DBD@NBDBHDJJFFBHBF@H@HAJ@H@J@JDHDHHBHBHBHDHDHFHBLDJBJFBFAHCDEHIFGDKFIBIDKBIAMAICICKAG@IBIBIDGFGFCF@JDFFFHBFD@DHHFHHHBLFH@@BBDDD@D@D@@B@@BDA@@@@BA@A@@@ABCBC@A@CA@@ABAF@DBDBF@DBBHBDBHDDDFBB@@D@HCHAFCFEHEHKTEJCLCHEHAL@JAJCFCLCJEJELEHCLAJAJCL@JALB@BB@B@D@DAJ@FBDAFAFCDEF@DBH@DADADAFADAFADCBGFCBCDBD@B@D@DADCBEF@@@BBBBB@@D@D@FBFBDDDBBBHDFDB@DBD@DAFADCHIFEDCDCD@J@N@F@R@JAD@JAFAJCBAFEDCHGJEDAD@BBBDADADABA@ABAAABGFEDED@B@B@@@B@D@B@B@B@@CB@B@B@BCDA@BBDB@BB@@@LBHDJDLFLBHBTC@B@@FBFBJDJDLDDBFDD@D@DCNCFAH@JB@BBDFDHDDD@BDBBBBA@ABCBCDELMFGFEBCDGDE@EBEDCDCDCBC@C@E@I@ADCBAFAFCBCBC@CGIACBGCGAGAGBGAGBEBGBKHGFCH@FAHALBJCHAHBH@FBF@J@JAJAHDFBF@NBJ@JBJBHDHDDFBDBFBFBJBH@HBJBHBFBFFHBDDFDDDFFF@FBFBFBDHDJFJBH@HAJ@L@H@HBFAFBJ@FAH@HAHAFBFBJAFDH@H@JDFBFFCJ"],"encodeOffsets":[[107272,34113]]}},{"type":"Feature","id":"621202","properties":{"name":"武都区","cp":[104.929866,33.388155],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ACACCAAG@CACACCCCC@C@A@E@AACAAAC@CAEAAACAACEAAGGAACCCCECCEEACAGCCCAICECACAIACAC@EACBKDEBEBKAEDCBAC@KBI@KAC@CCAAACE@CBG@CACCBCHEEECIEACBEACBCAEDGBEAE@CDE@KAE@CDEAGBEGI@AACAECE@CCE@CDET@B@D@DBP@R@F@FCFADEJCFCFEBED@BBDDBBBCLENI@GBQ@ABABA@ABC@A@ABABABA@A@ABEDCB@LDB@HALKFKDCHMFMDCBC@ADCBC@C@ACEEEIGE@CCAA@CA@@GEA@@DCLCDCAC@ACC@AFABA@KBCFA@@@CFABGDABABCACAAMCECCCCAAAE@C@EAA@ECC@GCGCEEGEGGAC@ABADADABCBA@A@A@AAC@AAA@C@ABA@ABAAAAE@ECCAAEAECAACAEEGEAE@@BCD@B@BABABABCBED@B@BC@C@IHKBCACAIAI@GAEAGAC@EDEFCFEHEHCFAFAFCDCDGBIFGDEBEJEJANBHBL@FAJAFGJCHCFCFAHCFADCHAFAHCJEFCFCDEFAFAHEHEF@HCJEHCDAFCFEHEHGDGDEDEFIDGDEHIDEDGDEDGHEFGDGFGDGFIBGDEDGDEFGFGHEJCLAH@L@FCFCFEJKFEFGDCDEFEFEHEDEBEAG@CCCCGIEGCGCGECCCGAGDGDKBCDEBGBEDIBEAG@I@GAG@E@GBE@GCOIAKAIBK@I@EFIHEFCHAHCDCFCFEFCDEBEBGAKDC@ECGAIBEDKREDC@KCC@AB]OC@CDCFC@CDEFGDGDC@C@GDGFEBEBIBKAI@IBK@IAIAEECCGCCECEAQIeBG@AGCEAG@EBA@AAECCCCAE@@@AB@@@@@AAABA@ABA@B@@@@B@@@@@@@@A@@@@BA@@@@@A@@@@B@@@B@@@B@@@@@@@@@BA@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@AB@@@@@@A@@@@@AB@@@BA@@B@@@@@@AB@@@@@@AB@@@@@@@@@@@A@@@@A@@@@@@@AA@@@@A@@@@BAA@@@@@@A@@@@A@@@C@A@@@@@@A@@@@@AB@@@@@B@@@@@BA@@@@BA@@@@@@@@B@B@B@@@@@@@B@@@@@@A@@@@@A@@A@@A@@@@@@@@@@BA@@B@@@@@@@AA@@@A@@A@@@@@@BA@@@@@A@C@@@A@@A@@B@@@B@@@@A@@@@@@@@@@A@@@A@@@@@AA@@@@@A@@B@@@@@B@@@B@@@@@B@@@@@@@@@@A@A@@@@@@DAB@@@@A@@@@AA@@@@@A@@AA@@@A@@@@B@BA@@@@@A@@@@@@@@D@@@@@B@@@@@@A@@@AA@@@@@A@@@A@@@A@@@A@@B@@AA@@@@@B@@@@@@A@@@@@@@A@@@AA@@@@ABGAIAIAQDAB@ACAAACA@@ABABEBA@@A@E@E@C@CCEAEAGACEECCIAG@GBGDCGAECCCEC@C@EBCDCDAB@D@BCDCDADAD@D@BADABABADAB@B@D@DADADABBHADENEDGDGJED@D@D@F@DAFADCDEBMDEFEF@FEPABABABADAB@FCDIFEBCDCHCDCBC@ECGCGAECAADEAGCEAEAKCEECEACCACAGEGCCACAGCACAC@C@ABAB@F@HAFAHCFCBC@C@GAG@C@C@EBC@E@ACEEECKDAAEOEGAECC@A@A@CAEA@GCEACCCAABCDC@CDC@CBAFABCFABE@E@C@AB@BBBBD@FBJ@J@B@BA@EBA@ABCFA@C@C@AAABGHCD@BABA@AB@BBBAFABCD@DABG@MBGDGDEFEJCFEFEFEBIFGDEHGJABE@IBEBEBEDIJCDAFCH@D@HAF@F@HQVCFBF@FK^EFGHGHCF@H@LBFHFDDJFHFH@HDDFDFBH@H@HBF@DAF@FDDDD@D@D@D@DBHBJ@H@LAHCDCFCHAFGHCDAF@B@DDB@D@BCDED@D@BDDDBFBDBFBFDRFDFBDBDDFBF@B@BAFABDNBD@B@BQDM@E@EBGJCDGFGFIJGHGHCFGJGJGHEFGFCDGFGDIFIHEHIJGFEHEDGFGFKFIDE@K@KDCBEDGFCDEHADCFCHEJEFGFGDKDGDIBIBIBKAGAIAKCGBKAIAI@I@K@I@MCCFCDEDGBEDGBCDKDCBEDEFADCDCFCFCFAF@H@@DDHJBBCDABABINAL@DBDDDBBAFAFANBHDBJDLFJDCBQHEBEB@DBDAFGBCDEJKJAFADDH@FBF@LADGDEBABABCBCBA@CHC@CDAB@@GDEBGD@@GDGFGDCBGBGDGDIDIBGBEBG@EBEDEBEBEFEBCFCHEFCFEFEDA@A@IG@@CBABCFCHAB@B@B@DCHABAB@BB@B@DAF@B@@@@A@@BA@BBBFA@@@BAJBDAFBFBBBBB@@D@D@BAFEF@B@B@B@B@BBB@D@BABCADDD@@BDBBBBBDB@@B@BBBB@BB@@BBB@BEDCAA@CHADC@CBE@ABAB@DBD@DAD@DBDABABA@@BBBDFBDBBJFDBB@BDB@B@N@F@D@B@B@B@FBBBBB@D@@B@@@DA@@DBB@FC@@@@@@@BABADAD@BBBBBBBAD@B@BBB@@BB@BBBAB@@B@BBBBBB@@B@@@DCB@B@DAFADABA@@@A@A@@@@@A@@@A@@@@A@A@@@@@@@@AA@@@C@A@AB@@A@@A@A@AB@BAB@B@@AB@@AA@AAA@E@@@A@@CBA@@FEBADABAB@B@F@BA@@@A@@@AA@AA@@A@CDCBA@@@@@@AFEA@@AC@CCC@@@ACC@@A@@BC@@@A@@A@A@A@AA@@@@@AD@FAL@B@@IAC@AAA@CAA@AB@@AD@HADAD@DCD@FCB@FKFEDCB@F@DA@@B@@BB@@@B@@BB@@@B@@@@B@@B@@BBB@B@@@BBABABAB@B@DBB@DAHAD@@@@D@@BBBA@ABEBAHGBAFA@@JFBBDDDDHDFDJFLBBBBDBBBB@DBBHDF@FBB@@B@@C@ABEHABADBD@BABA@CBCFA@ABCD@DAB@@@BBD@BCBCBGL@@@B@@C@A@ADA@@D@@CDCB@@A@ADAH@DBD@BB@@@D@@@D@FAB@DBB@BB@BB@@BD@F@D@HBB@@@B@B@B@HDB@FCDAB@B@DA@BDBDBB@@@B@@AB@B@DBD@DBB@FDFDFDPDB@B@JDDAB@DG@@FCD@DA@@DGDCHEB@HEB@D@D@HCBAF@DAFCFAB@FBJDDDB@LCJ@LCH@JDBBBFBD@H@FBDDDFDVNBD@FAFAH@F@HDHJFHBJDL@J@JAHEHCNKHCHCHEHGHGFEHEHCDAHCFGFCBEDG@GAEBKBG@E@GDEDGFEBEDAHCFCHCJAJALAPANBN@H@HDJBH@HBFDDD@FBHAH@FADBH@F@BVJJ@NBLBLCP@N@LBPBJBP@LBLDJBNDJFHDHHFDHFFFJFFFHFLJJFHHFDFDHFHDHFFBJBP@LFFFHHNHLBJBJAHGHCFGFEDGDEJEFCHCFCFCDADEDAFCDEBCCCEAI@ECGCCCFCFAJ@J@D@@@B@BAF@FBDAB@D@@@@AB@D@DAF@BAB@D@D@FBH@B@B@BAD@D@B@DA@BDB@@DABAB@B@JDLBDDBBB@DBDB@@B@LG"],"encodeOffsets":[[107930,34458]]}},{"type":"Feature","id":"621225","properties":{"name":"西和县","cp":[105.299737,34.013718],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@@@@@@AAA@@@@AA@@@@@@@@A@@B@BAF@D@BADCBA@ABAAA@AA@@A@@@AAA@@AAAA@@AA@@@A@@@C@A@A@A@C@@@CBAJIBAB@B@BBDCHGFGDGHEDCJEFEFGHGJEDGDEDGFKC@CEIKGGKKEKEEIIAIGMOEGAM@G@MBQAG@K@KAM@OAO@I@MAKCKGGCEGECECEIEGAI@IAKBK@KAG@IDK@KDK@MBIBK@MBMBIBIBOAG@GAKAGEGCEECGEICGEECCGAC@EAE@EAIAE@IAEAGAEACCECEEGAGCEAGCGCGCGCGEIEECKKGCE@CEGEECECGCG@AB@DAF@F@D@FB@AA@CAGCECCAGAA@GACAAAC@I@EECACAA@AACCKAICA@A@ABCB@@CA@ACBA@C@C@ABA@A@G@EAC@C@A@ABE@CBC@A@@B@@C@A@CBEAE@ABA@@@C@I@I@EBEDDDHDFDJ@FBDDADCFEDCBCFCBEDEDGDEDIFCFCHEFEHGDGHIBIAKAMGGGEEKEO@IAEAGEGCGEECECGGIEKIGEEEIEEEGEECGGGCIEMCIAKCKAO@IAOAKAM@O@KDKAMAI@UI@HADCFAFED@F@FAHBFDFBF@FBF@FDHDFBFBHDDDJBFDHDHFHFHDFFHJDNDLBDAH@FAJCHCB@H@LCLEBADBFBB@B@DAROD@D@FDBD@@@DGN@@@B@B@D@DBBBB@D@D@B@DAFADCFCHABGDE@IFIDAD@B@FBD@FBJ@D@D@FBDDFBBBB@BBBDBDBB@B@DBBBAD@BAD@D@J@HHH@DGD@DAHA@CAGBA@A@EBE@IBG@CBCJ@BB@HD@@BFBBCDABIDAB@DDJDJABABEA@BDHBBD@FDDD@DADABCBABGDCBCH@FAD@FAH@BDP@JBHAJ@H@FBD@@BBTBPAFBD@DDBB@D@BB@FD@@ABABCBABAD@B@BBBBBBB@D@BADAB@DAD@DBBBBBDDB@BBBFBBDDD@D@@ELED@FADADGHCDAD@B@@@BB@DBBBFBDDBBBBFFBBBH@H@D@F@DAB@BABBBBB@BB@B@B@D@DBBBD@B@F@FBDD@B@BB@BBDBB@BBBBB@BBBBBB@BBBFH@BBF@H@HBH@HAH@HAHCDEHAHAF@FAHDHAFHFHHDFFHLFFFHFJDJDLDH@@@HPDH@BFFDBBD@BFD@@BBBAD@@@BBDB@BB@B@DADABABA@@B@DBB@DC@@B@B@@@D@BB@BBBB@@@BADABAB@D@FDDB@@BDDFHHDD@BBBB@@BB@@@F@B@HADBNBDBFDDBDDDDB@B@D@DBDJDBB@BAF@B@DBB@@B@DEZAD@DAD@JCF@DDFFFJDB@JAJFJFHBJDJFJFLEFEHAFAHCDEDGDKFIDGFGFIDGDEDMBEBGFGBEDE@GDIBIBEBIFIAGBGDEBEBCBEBCBCDEFEDEHIFEJAHEDAJBF@B@DAB@BAB@FBF@JCBAB@BA@@BB@BBBHDHHDDBD@B@B@@ADCF@HBDBBD@@ABAHABBB@BBBB@DBBB@FAB@D@@HBBBDD@BADCHGJMBABABB@BBBBBF@HAD@D@D@@AD@BA@@BABA@AHCBA@AAA@AA@@ABA@@B@B@H@B@BABAB@HAFAB@"],"encodeOffsets":[[108116,34901]]}},{"type":"Feature","id":"621224","properties":{"name":"康县","cp":[105.609534,33.328266],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AIAIIOEEGGCCGCSMGAIGCCCGBE@E@GAGAEGICECEEKBIBMFK@GBGBI@IBI@KCG@ICEAECMAGACCEIAGAGBE@IAI@IDQBIDGBK@I@K@K@I@GBE@C@EBEDEDCBI@IAGCKCGEAEDCDEHGFGNUFGFGDEFCHGDAFCFEDCFCDCBGCG@CAEKECC@IBEBGFGFEFEDCFCLEN@N@HAJCDABGCC@GBGBCHEFCFAHAFAJAV@H@NEHEDGFEFEFADCFAPALDLBP@HDH@FBJ@F@L@F@HAHAHCDADCFGLKLIHCPEHCNGFEDI@GBGAEBE@GAG@GBG@KAGBC@E@CAEIIEACBEHGDEBABAB@@@B@J@DADABA@ABABBBBBBBBDBB@B@B@@ABA@EAEAC@C@A@CB@B@B@BBBDBJH@BD@FADB@B@DCBGBEFBDADA@ABABC@CBAAC@AAAE@A@@@A@E@ABCDAA@ECA@CACCCCAA@@DGLM@@KG@AGEIAECIGEECEAGDEDCDAF@NFFHFBHDDBFADCDABCCCEACCEEACBGDEBG@@TBHE@CAE@AECEBG@GGGCACBGAMBGFCDCDGBCFCFC@AEA@A@CAAEAG@G@CCACAGAK@EFGHGDCHADA@E@IBGBEGEEG@@@S@GEGAICGECCCOMKMEGGEEEGGEEEECECEEGECGGGCG@EFGBMHIDGBIBG@CCICCCGCEEICWKKGEAIAGEGAGCIAGEIEICIEKAGCSAIAG@GBI@GAI@SCGAGAG@CAGAE@EAK@GCGEEIECCEEAGCI@I@KCK@DP@HAF@H@FBH@H@JBHAFCJAFAHCFADCLCHBHDHDDHFHDHDJFDHDD@DBHAFCFGFEFEFCFCDEHEFILEFEDEDK@G@KBIDGFEHEHCFCHCFAHEJCHEHCHEHGFCHCFCHCFGJCFCHEJCFCFCHGHGFEFEDCBGDIFGDE@GFGFEBEBCFEDEDIFGDEBGBCDEBGDEBEDGDIDEHIBEBK@GAMAIBIFAFCFEHAJCHCDEDEBEBGDGFEFEDCF@FBDBHBF@HBJBJBDADGL@J@DADA@C@AFADABABABA@C@AD@@BFHFFFDBBBFDFBBBDD@FBFBBAB@BAB@B@DBB@BBD@B@B@BABADCBCBAB@BBDHHHFFFHDHDD@FDB@FBD@F@BBDBDDFDNDBBBDADABCBAHEB@D@@EBAD@LABEB@BDD@BBDCDKDCD@@FB@HB@@DBBDDF@JHFFDF@B@DADCD@BADCDENGNCDELKLGBA@KCA@CDAF@B@BABABAB@B@BAD@BABAB@BAR@HMJKFADAACCAAC@AFEFEDIDCFEBEDE@Q@O@CAC@A@S@CF@DDF@DDFBFBD@BHJAFBHCF@DBF@LCF@DBFAFCHBFADBDAFBDJFFDFFDGDABD@DAH@DDFBBDB@DBD@LAJ@LBDDAFCLBFAFALCDAFBD@DBJBDBDBDFBJDDHDDBFBDFFDDDDDBBHHBBDFBBBDBBBF@DBDBBBD@B@F@B@DDDDDBDBD@DBHDBBDBD@@FEDCFAHAH@HCJEFAH@DB@DDBDDDFBDDBFBDCFCJADAHEJEDCA@IAI@G@IDA@EAC@C@AC@C@CBCDCDAHBFCJIcT@@@@@HA@@@@R@@@@@B@@@@@R@RE^g]pIlCNSJANN`@LWJEzRZXdBDXfR@@@@NFTE@@B@B@ZS`RN@T]^UTYCVEFA"],"encodeOffsets":[[108426,34341]]}},{"type":"Feature","id":"621223","properties":{"name":"宕昌县","cp":[104.394475,34.042655],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@C@AAAA@AAA@@A@A@A@AAAABA@C@A@A@@AAA@A@C@C@ABA@ABC@A@A@AC@@AA@@A@CA@AA@@CA@@AA@AA@@A@C@A@A@C@ABC@ABCBA@CBMDEBEHEDEFEFCDEFCDAHCDCBG@EDGDELGHEHEHEFCHEFCHCFIFKFGFEFGFGBEFGDGHIHIFIJEDEHEDGDIHKDIBGFEBC@ABCBCHGBABCBA@CBAAC@@@E@CBABA@A@@@@@AAABCBC@ABED@B@B@FCFADAB@B@BBDFDB@@@BAB@@@DBBDBB@BABA@C@@CG@@@@BADABAB@BBFBBBBBB@B@@@B@@A@C@ABA@@DADABABCBCAGBA@AAAE@@ACACAECAECIAA@ADC@A@A@AAA@@DEBA@E@C@@AA@@@C@@B@DDFD@@@BB@@@@A@A@AB@@A@A@A@ADABADCB@BA@CAAAA@C@@BABA@@@C@A@A@@CACACAA@CCAAC@@ABE@EDG@BD@BDB@@@@@CC@AB@BB@C@AAA@@@CAAA@K@CAA@AC@@A@CDC@A@A@@A@CACACACA@E@@@A@@AAAB@@@BBB@@@BADABA@@@A@ABBB@DAAA@A@ACA@@AEC@@AA@@AC@C@CAABAF@DABA@C@@@EBC@CACAIACAGAGCCCAE@GBG@E@G@G@I@E@K@GCIAGAICCEEACCEACBGDCFCJEFCHCFEFEHEDE@EACICGAGAGAE@GAEAGAGEECCCCE@EDEFIFGJEHCHAHCJALAHEF@JEDC@@B@BABA@ABAJGDB@@FKB@DB@@@@@C@A@@AAA@AC@E@@AACC@GAA@@C@ABC@G@GAA@BE@EAO@@@IBABA@CAECC@A@E@@B@@AB@@A@@@A@@A@A@ACC@C@@@CBA@C@AA@@@@@AAA@@I@EAA@E@A@@@AAAA@A@A@ADE@AC@AAA@@@A@A@GAC@E@C@@AA@@AAAA@CAA@EBC@@@C@@@A@@AAC@CBGBCB@@@DADC@@@CB@BCB@D@@@@A@@HKDADA@AAC@A@@BA@CDCBAB@DEDAB@BA@AACBCBAFGBAD@@@@AA@EAE@GCAA@CAAAAACAAKAIEECGCCCCCAAIE@@EBABGHABAF@BABAA@@@C@@C@GBCBA@CAA@A@ABABAB@A@@@AAA@AA@@@@A@@A@@@A@@AA@@@A@@AA@@@CBE@A@CDEFELA@EDC@CDC@CBGBC@@BA@@BBB@DBB@BBD@JA@K@EBC@@B@@@@BBB@B@B@@@@B@@AD@@@BD@BD@@D@DDD@@BB@EF@B@@@@B@DADCB@@@BBB@@B@@@B@@ABE@A@A@ABCBABEF@@AB@DB@@@F@B@BBB@@BA@@BA@A@ABA@@B@B@BB@@@BAB@D@@@B@@B@@@@@@B@B@@@@@@B@@@B@@@@@B@B@@ABCBEBCBA@A@CD@@A@@@AAAAAAA@@@BAAA@AAA@@AA@A@ABCAAAAAA@ABCBCBA@A@@@@@@EDA@CA@@CB@@A@@@@CAAAAEAA@A@A@C@E@M@A@A@ACA@CAIEAAACCEAA@AB@BABAAC@CBC@CAC@CBABAF@DAD@BCDGB@DBFC@AAA@AA@@AAAAAA@@@CAAAAACA@AC@CCBDAHA@ABC@A@A@C@G@ABGJEFEB@ACC@CAA@AAAABA@@BBDDH@BBBJHBD@@@BGDCBA@C@CAECEGCAC@@B@@BHIRAB@@CAM@G@AB@@BBB@LD@DAD@@S@AF@B@@NB@@AHBFFDDFBDH@HBB@@B@BAB@DBB@@D@DDD@D@@@@BAF@@ABCBCBADEDAB@@AAACA@E@A@@@AEAAECACA@@BC@C@OAI@EDADAB@BBBBBGJ@DAF@D@BB@FCFAFABABBDB@B@DABBBAB@DADABABAD@F@B@@ADCBG@CBABCDCBEBCDADABCD@DHJBD@BC@@@AB@@@B@@BFFDDBDDHDDDHFBFBFFFFDBBFFDDDDHDFHDDBFBBDFBDDF@DAFEDEBEBC@G@IBGBKBEBEBEBEBKAK@I@G@KBGDGDIFCDEFCFBHAF@FADAH@FCFGHEFGHKDCDCFEDCFEFEFGHCBIDEDIBEBIBEBIAK@K@IDI@IDI@GBEDEFCDCDCHEFEFEDEFGDGFEDEDIFCBEFEDGDGDEDGDCBEDGFGDKHEDEDEDEDCDGDEDGDGDGFGBEBGFGDGBGDGDIDGDEFIFIFGFIFEDIFEDGFGDIFIDGFKFEDGDGFGDEFEDEFEFEDGFA@C@C@C@CBEFC@CBA@EAC@EEA@AD@DDBBB@D@DADCDCDCBADADADCB@B@D@D@BADADA@GBIDGBEDGBEFIFGHAFCFAH@HCH@F@H@HBFBHBFBH@HBFAHAHAJ@JNDFHDDFFFDDDDDDDDBFDFFBHDFBFBFBJBDBHAFDFFDFDJDD@HBHDF@HDJBJBJ@N@J@L@LANBJ@HBHCFFFFDHDFDJBJ@FBF@HAFELAF@F@H@HCHEDGDGFIFEDEFCFAFAH@DAF@HCHCFCFEFEFEHCFEHBJ@F@D@DHBB@BBDBH@D@BDBBBB@BABABBBBBB@BBBBDBBBBAB@@@HBD@@@D@BB@DAFBH@D@BHBFBHBJDJDFDJFJJFDFBFDHBHBHBFAF@JCDADCFEHCHAFCH@LAHAN@JEDCFCFEF@FCDDHBDBBF@HBF@FBDBDFLFDJ@JAJ@FAH@L@H@FBFBH@J@HAFAHAJADCFABEDCBE@IDGBGBEDEBCDIDCFAFAH@HBH@HDDDLBJBH@DCHCDCFEDCDEFEBEDGFIFGDGDE@A@ADABABCBA@AAEAAAAA@@ABABA@A@CBABABABEBC@A@CAEAAAAACAAC@AAAAAA@CBABCBCBAB@BAAAAA@@@AB@DABA@CBABAD@DADA@CBA@CBA@A@CAA@CBABABAD@BABAD@B@D@B@DABABABAB@BABA@@D@BBB@@BD@B@B@FBD@BADABABA@A@CB@BABAB@D@F@B@BABADABAJADBDABABA@CBABABAD@BABCBABC@ABC@@BADBBBBBD@@BBB@BBB@BBD@BBD@D@BAB@D@B@B@B@BBB@B@B@BA@ABAB@@D@D@D@BA@AB@BABABABABA@ABABE@ABAB@BAD@B@D@B@D@B@BBB@BBB@B@B@@@@CBA@A@AB@BAD@BBBBBBB@BBDBBBB@BBBBBDBBBBBBBBBBB@BBB@DBD@BB@B@BAB@BAB@B@D@BD@B@B@BAB@D@@BD@@@BABA@A@AB@B@DB@BBBBBB@BBBBB@@BD@BBD@DB@BBBB@@BB@B@BA@AB@BA@CB@BAB@D@F@B@B@B@BAB@BAB@B@"],"encodeOffsets":[[107155,35049]]}},{"type":"Feature","id":"621227","properties":{"name":"徽县","cp":[106.085632,33.767785],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@C@A@AACA@@AGCEGCCCEBE@ADA@I@ACGKKAC@EBA@AAEKQAABKAEBCFCHBFBDHRJLAPAF@JBD@FEJGFAL@FCHG@EBIDGBIDEBGBEBG@AAIAA@@A@A@CDABABA@A@M@A@A@A@C@AAIAKAC@@@AA@A@ADE@CAEAC@G@I@ECEAICGEE@C@EAGEGJI@AC@ACKC@A@AA@ICGAAA@@BA@CBADA@ABABAF@HBB@B@@ADIDA@A@AAA@@BC@AAACCBCD@D@HCFADCBABADADA@@@C@AA@@AAA@ABEFG@C@A@ABA@AAAAE@MBABCBCAIBC@AAAEECAC@EG@ACCCEDC@AB@FIFABABEBCAA@C@E@A@AACMIAEAACCACAC@CBC@A@AGA@@ACCCA@GEKCIAKCI@GAAADC@AAC@CDCDAD@BABA@CCA@A@ABADBD@DAAEEGCGAEBABA@AAE@ADEDCD@F@DABCDAB@BDDDDBFBDC@C@ECAACBADADAHAFABABCBCD@DBAF@BBB@@B@B@DA@@@A@A@ACC@@@A@@B@B@DBB@@D@B@BFBJBHBB@DN@FBBB@D@DBDBBB@BDADAD@HADAFAD@BA@@@C@@AA@AB@B@FABB@@@D@B@@@BB@BBF@DB@@@A@@AA@CBA@ADEDC@BDB@@F@HABAAAACCA@@AA@A@AAA@@@ABABAHAB@HADA@@BA@A@C@A@@ACGEAAACACBA@AB@BA@@@A@ABADADCB@@@DBB@BAFADAFAD@B@DBB@@B@@@@DADADA@@@A@ABCFC@A@A@ADCBEBA@A@AD@FCBAB@D@HBB@FBB@H@BADA@@D@BBB@BB@@BBB@B@DAD@BA@@@ABEA@AA@@@A@A@ABADAJCHEBA@@@@EC@EAG@A@ADC@@@A@@@AEC@A@A@@@AB@@AAC@@DCBEJAFAD@HAJ@JAJAFCFCBG@EBGIFQDG@IAK@G@K@KEE@I@OEECGIGGECGCGGICGCGCEAI@G@GBGDKDCDEFEBCFEDGBKBICK@IAGAKEKGMIGGGGEEGECCEEGEGEIAKCIAGAG@KEIKGCMAKAEBGBGDIBE@CFCBGBCBA@A@EAA@ABABAD@DC@CBA@AB@B@DBD@FABCBAB@BB@BBB@BBBBDBDBDABB@@BB@@@BABA@A@@B@@CAACC@K@G@ICAABABEBE@@C@E@GAA@C@A@E@EAE@C@A@CBCF@BBBDJHNABAB@BBDPABAD@B@HFJH@DCJKAC@@@CAA@ABEBEHABSBABADA@C@CB@@GBGDA@AAIEEAA@GEACMEC@ABGFA@A@EBEBC@C@CAAAA@CGEECAEACEAAC@A@ABE@CBAD@H@H@FA@ABEAACE@EAC@GCC@AACBC@ABC@ADEFEBIBI@E@K@EACDC@C@@DAFAF@F@@ADDN@DGHE@@B@DBDB@@BCBIF@@M@GACBAB@@@JBB@BAB@B@FHLBFDDDDBB@@BBABA@@FBDB@BD@D@B@BA@@@@B@@BDFF@BAB@@ABC@CBA@A@A@E@A@ABAB@@A@AB@@BDBD@@ABABAB@@@BB@@B@B@@BB@@AB@BDFFFBHJFFHFJBHBD@HAFEJADGFGBI@KBC@EBIFCDCDCFADADAJ@FCFCFAFCHAFCJCHAFAFCDEFCBEDE@MCMCIAGCGAICMCKAEAMAKAIB[DI@K@IDGDIFADDD@DADCFBB@@LA@@HHBF@DCHGHCB@@ADADC@@@@@AFA@EAGDM@AB@BE@@BD@DBFB@@CDBHABCDADQXAFABEDE@E@AACEEAA@EGCAAECACBA@AB@D@BGJDJ@FCF@D@BFHFHADHB@HAF@DBDFFCDMFCB@DB@BDAFAFDDHDFB@@BAHAD@LFNBBBFFBNDHFLCL@JLHDH@DCHGJGLCFABA@@@ABCF@F@BAFAB@BABC@ABAB@B@FBF@B@@@BDB@B@FAHCFEBI@I@CBEDCFA@G@GAEACCAIEAE@CACCGEEEICG@K@G@KCGCGCCIEECCCCKMELCHCFCHIFGHEHEFIFCDGFCHEHGHCDAAA@A@ABIJAB@D@@@D@B@B@B@D@@@B@@BB@@BBBB@@BB@B@@@BB@@BBBAB@BABCDABC@E@ABA@@@@B@@@@@@B@@B@@B@BB@@@@@@@@B@@@@@@BB@@@@@B@@@@@B@@@BB@@@BB@BBBAD@@@@A@E@C@ABC@C@@@@B@D@@B@BBF@J@B@B@@@BDDBBBBBB@@ABABADA@@BA@A@@BA@@@@B@B@@@B@DBB@BDBB@B@JAD@BADABCDCB@BADC@@B@BBBB@@B@@@D@DCBAA@@AACAACCEAAAAAAA@CBABABAB@D@D@B@D@BADB@BD@@BB@@@B@DAB@D@B@DAB@BBBBBBBD@B@B@BAFABBDBF@BBD@DBBBD@@B@B@BBBBBB@B@B@D@B@F@D@B@@@BBBBBBDB@BBD@B@DBB@BBBB@DBB@D@BAB@DBF@DBD@BBBB@DBDDBBD@BDB@BBD@BBD@BBD@BBDBD@B@B@D@B@BBBBDBBBDBB@BBBBD@D@D@BAB@BABAB@BAB@BBBBBBBB@BABABAB@B@@@D@BBBDDBBF@HBF@D@D@FBB@FADABABCBAB@D@DBB@D@FCDABCBADAF@B@D@BABA@C@EBC@CDEB@BA@ABA@AAAAAACCEAA@E@AAA@EBCBCFEBCDCBAB@D@BBDD@B@@BB@BD@B@HBDBBBBDBDBBBB@BBBB@D@DAB@BAB@B@BB@B@D@B@BAB@BBDBBBBBB@BD@B@BAHCBB@@BBBB@@BBBAB@B@DBDDBDB@BAB@B@D@B@DBD@D@D@B@B@DBD@B@B@B@D@BABADCBCBGDG@A@AACACAC@C@A@E@ABA@ADBB@B@B@LCD@B@D@RCBBB@D@B@HADADABBB@NPBB@D@@BB@BBBB@D@D@FABAB@B@BBBBD@DBD@BBBB@DDDDBDDD@DBF@BBD@FDB@DBB@D@@@@@B@D@BBB@BALCFBDBFBDBDBBBB@BB@@D@TBDBD@D@D@TFDBB@D@D@FAD@H@BBD@D@HBDADABADABABCBAD@D@B@B@BABA@ABAB@B@B@D@BAB@B@B@B@B@F@DCDEBABA@A@A@E@C@CDCBABAAABABA@BB@BBDBB@DAD@B@D@D@D@BAD@BCBCBCDADAD@D@DEDCBAB@B@@BB@D@FAH@DABBB@DB@BD@B@B@BABBDFD@BBBD@BBDBBBBFBB@B@DENEJ@FADCDADAD@B@BBB@BABAFCB@BAD@BAD@F@DBD@B@DBFBDBD@DBBDB@BBB@D@D@BAD@D@B@D@"],"encodeOffsets":[[108777,34936]]}},{"type":"Feature","id":"621226","properties":{"name":"礼县","cp":[105.181616,34.189387],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@@@B@BBD@@BCF@B@B@BBBBB@@B@F@B@FBJ@@@BB@B@@@@BBD@B@DA@@D@D@BDB@B@@@@B@@@BA@@BA@@@@F@BDDBF@DABAB@J@@BP@FAFB@HBH@D@BAD@@@BB@HDDBB@@@FBDB@BB@@@B@D@@@@CAA@EL@@CAIHAB@BABABA@@@CDIFE@GFKBIBGDGBGDIFEHEJCF@FDFDDFDHFHBFBHBF@HBHBHBJDBD@FCFGFEFEFGDEDIFEDCDAHBDDFBDFFDDBJBHDJ@H@L@F@J@H@H@FAH@HBFDDHDHBDBJBDBDBD@FA@@D@B@BA@CBEBADBD@D@@BB@@BD@BF@@DB@B@BBBCBA@AA@B@B@@ABCBAB@@A@AA@@A@BB@BB@@@F@B@BDBDBD@D@BB@B@D@DCB@@@BDB@DBL@B@BB@D@@BB@B@DAAA@@BDD@@@@A@ACC@@ACH@FAF@BD@BBDDB@DBDBDB@@@B@B@D@@ABAB@@@DBBBB@DABA@CDABCB@B@B@B@BA@@B@B@B@@A@@A@@ECCCA@@@@D@@BB@@@D@FABCF@@BB@B@B@BCD@BBBDJBFFDDBDB@BF@BB@BABBHADADABCBCB@@AB@B@D@BA@@@A@A@AAAAEAAAA@ABCBAB@@@@DH@@@DABABA@CAAA@C@@BA@A@@CACEAAA@A@CBEBEDA@A@C@AF@BADADBB@B@@@@@BABAB@D@F@@BDAB@DABADABGHADAD@BADEFAHCJGLCJCHGFCFIFEJGJGJCHEHAFEHEHEFEHELEJGDEDGFEDGFGFGFKHCFCH@FAHCDGDCBEDCFEDEFCFGFAFCFAN@DABAD@BAD@B@D@B@B@D@BB@@BBB@@DB@@BBB@@D@BB@@BD@@B@B@BAD@BAB@B@D@D@BBB@BB@B@D@B@BABB@B@B@B@BB@BBB@BB@B@DD@B@B@B@B@DB@BB@@BBD@@@BBBBA@@DA@@BABAB@BABABABAB@B@@BBB@BBB@B@BB@B@BB@@BB@BB@BB@@B@B@BBB@B@B@B@B@BAB@@ABBB@@@D@BBB@B@DB@@DB@@@BAD@FABABAB@D@BBBD@BBB@B@DAB@BADBD@D@D@BBD@BBDA@ABBFBF@FEDCDCDAFEFEFGHCFAL@JDH@N@JDJBHDHFDJHJFDHADBH@FAFBHBD@DF@FAFAHDJDDHBFBHBLDH@LDLFHFFFFFHH@HEJGLEHAJ@DBHBFBH@F@F@HCFADCFCLCFCJAFBHFHJFHBH@J@J@N@PAHAF@HBH@NDLBL@NDLDNBJ@L@HAHAJAJALBL@HB@@ABADAB@BBBB@@BD@FBFBBBBBBBBB@BBDABC@C@ABCBCF@B@B@DBBDFBD@D@DBF@B@DB@B@D@D@BCBA@@B@H@H@FAJAH@L@H@JBFBHBHFDBJHHFHDFDDFDD@@B@DABABBDF@@DD@@BB@B@BBDBBBBBBD@BB@B@DBBBBB@B@B@BA@@BAB@B@BB@@BBBB@@D@D@B@FAB@DAB@DBB@DBBBB@BB@B@BAB@D@BBBBBBBB@BB@B@@@B@D@B@BBB@DBB@BBDB@@BBBDB@BBB@B@B@@BBD@@BBB@BAB@F@B@DBD@B@BBB@BD@BBB@BB@BB@BBB@@@B@B@D@D@D@B@@BBBAB@BABABBB@@BB@DAB@@BBB@D@DBH@F@BCB@BDBBBBF@FC@@BABCDAB@DDBBD@FADAD@DAHAB@FBNHB@B@@@B@@E@@@A@ADCB@DBB@FBJDFFDDBB@B@B@BBBD@B@B@@@@ABE@AB@D@J@H@BBB@B@DA@CDIBG@A@ACAE@A@A@AA@@@ABAB@B@BA@ABABADAFGBABABA@ABA@ABQ@@BCBC@CBEBCBEBA@C@EAA@A@G@C@AAM@A@AB@@A@ABAB@B@FAB@BAB@@ABA@AB@B@BB@@BBB@B@DA@@B@BAB@BA@ABAB@D@B@D@BA@@DA@A@A@CACAA@ABC@@B@B@@@D@@@B@BAD@F@DBB@B@D@BBB@DBB@@@B@B@FAD@B@@@@@@B@@ABA@CBEDE@A@@B@BAB@BABABB@@BB@B@@BB@@BBA@@BA@@D@D@BABABAB@DAD@FAD@B@BABAB@B@BAF@JAJAF@HGHEJEHGFCNEDAFCDAB@JDJFNHNHB@REHCPIHEJEPGBAJGJEFCDCNOLSBALMFIDAHIBCFQ@CJQDGJMDADELKBCFGBAD@RFJJLFHHFADCFCDIDEAEQUACGAI@MEGECGBEHIRCFALIJGDECEGGOCAABSBKFANAHCFGDGECE@GDEDCC@EBCFEFCBGBK@G@IAE@G@G@EBE@GAIBGBCECECCEACBAFKBCDCFCB@JC@A@AAAKOEMAM@CBKBCBA@@@GC@C@C@GBE@AAAA@AAAABABINGHCDABC@ACAA@GC@A@EBA@AA@CAAAAA@AAGBAB@BC@AAAC@GDEBC@@@A@AACCCGGGCAA@AAA@@ABA@ABIDE@EAA@ABA@CBA@E@IACBGFIBEFGJCFEFCFADADAFADAFCFAHBHEJAJAFAJCJ@HCFAFEHAHAFCNCFCHEJEHCHEJCLCHCFGDEBGBEFKFIEIEICGAIEIEIBA@ICEECE@CDE@IBC@CBCFY@C@AA@CAA@E@ABA@CACICAC@A@A@CCCCCAECCAMACAGBA@E@@@A@@AA@AA@ACCGGCEAC@@CAECC@A@ABCBAB@@A@AA@AAAC@@@A@A@@@CDA@CAA@@@ABABCBCBA@A@@ACAAA@@C@ABAA@@EC@AACCAEE@ACGGO@@G@KCICICGEEEKEEGCEGGGEBECGBG@EBEBGFGDCBG@GBG@GAG@G@GAE@AEGAA@AAAAAAAA@AAAAA@CAAAA@@A@ACCEAE@A@C@AACAC@A@A@A@@AAAAABA@ABA@C@E@C@GAGAAEEAAAACCEAAACAA@@A@@@ABCDCHGBCBC@EFCFK@@@CCCACEAAA@ACAACAAAA@CBC@CBABC@A@CAAAAAA@A@ABCBADABABA@@ECA@@A@CAACCC@EAOBSAAA@@AC@E@GBIAG@ICO@ABG@EBC@EDGDAHCBADABABC@CCCECC@AACG@AFBBABACICI@CBAJCBADCAAAE@@GCA@@ADIDAH@JAF@FAB@B@HADBB@BG@CHC@CGG@G@I@CBC@ABCAACAA@A@CACAAA@AAAAACEAC@E@C@CAI@EAC@E@ABCJCJEF@HCBADGDEBCBE@C@A@C@CAAAA@C@C@A@A@@HM@C@@ACECC@C@QPCBA@A@EACAABKFKDG@A@GDIDEBG@CBKAMCICEGCEEGEGCGCGAECICCAGAECECG@EAE@EAECEAEBG@E@EFCBEDEBC@G@A@EAGBC@EBGAG@ECCECGAG@IAGCG@M@MAOBKBIBIBGDEDGDCBAFEFCHCF@H@FAHALBF@HCHAFEDEHGDCBGDGFEFGHGHGFGDGDMLGDGFIBI@K@ICGAIECG@G@EBGBE@EACUMECCCAC@E@GACAEAAICG@KDI@KDA@CCICEAA@EBEDCBE@ABGDC@C@A@GFA@GFCDCH@@CBC@ED@@CHA@CBICA@A@OCECECECA@CAC@CAA@A@@BA@@@A@CACA@ACBA@A@CBEDA@GCA@A@A@@@"],"encodeOffsets":[[107247,34456]]}},{"type":"Feature","id":"621228","properties":{"name":"两当县","cp":[106.306959,33.910729],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BENCHBNDBBDDDBFFDDFDDDHDHAHAHEJGFEDIFIDE@EBIDIDKBIBIBKBGFM@GBKDIBEBGDEDEDEDCDEAC@EAA@A@ACAA@AAEKKM@ABAA@@@@@A@A@@@@ACGGKAC@C@AA@CBA@AAC@CBA@ICK@K@G@G@K@IBGAGCIACA@GBIBK@IDGBG@IBI@GAGAGCCGIGEGGIGECICEEEGCGBI@IDIDGBGDGBE@G@E@GCKCGCEGICEECCGGEGCCGGECECIACAAECCACACCAEAACCGEEC@AAAAACAAAC@EA@AGC@C@ADCBABABABCBEBCBA@MAIBI@EFEBCDCFAL@J@J@RFHB@B@@@@ABA@A@A@@BA@@B@B@@B@@@B@BA@@BBFBBBB@BB@@BB@BA@@@EBA@@@@B@@@BD@DBB@B@@ABA@ABA@ABA@ABAB@D@B@B@B@B@BA@A@C@ABA@C@ABABA@ADAJEDEFGDGDG@IBEEGKCGEMGEEGE@GAGAIEICIAGBGHEFCJCF@HCFEBEDGBEBE@G@E@G@EAGAG@GBE@IAEAGAECECGBEDIHCNEJCL@H@J@FAL@F@LEHCJGFG@EHKHIDIFEFKDGDIHGDGDCFKFGBGBIDIDM@ACA@CBC@GAEBEBE@CCAACCCAC@CJC@C@CC@A@@@G@GCIAICCG@G@GDIDOBECKAECGCEACC@E@@ACCA@GKCGC@CDGBI@E@GDC@ACACEAEBBBA@CB@BAD@D@DCDABA@@BAAA@AB@BIDEBEAEECCGCKGGBGHIFGFEFCJ@b@RAPCJBL@LAJAJAJAFCH@DADCBAH@FAHEDEDIBIBI@GBC@EBIBAFCD@@BD@BA@@B@@@B@BFD@B@@@B@@CD@B@BBH@FFD@@@@ABGFIDCBAB@B@B@B@@BBB@AF@B@@ABC@CBA@A@AA@@AAA@AAC@@@CBABG@A@EAA@GAC@A@ABEDC@@B@BABAFCD@B@B@BEDAD@B@B@@CBCBCB@@@@@AA@CAA@C@EBCBEBABA@CA@@A@CDCBAB@B@B@@ABA@@BABBDBDBBHFBD@@@B@D@BAB@@CBGBA@GBABAB@B@@BB@B@BBB@@DBBDBBABGBE@@@CA@ACDCF@BAB@DBB@@@B@@CAE@AAA@@A@@@A@C@@AAEBA@A@@BBB@@@D@@ABC@EBCBGBC@CBCB@AAACACAC@A@AA@ECMA@GAIAEA@A@A@CA@CAA@A@@@@B@@DD@B@B@B@@CBA@A@@@AA@ABECAC@ADADABEBGBCBCBABBDDB@F@DCDEACACCACA@CBADCBE@C@CDCF@BBF@BABABBFDHFHBFCBC@CAAB@B@BDB@DABABC@CBCD@DBD@BCDBBHBJ@LDJBLDHFB@DDBD@@HB@B@BAD@DBDBDDDBBBFNJBD@B@B@F@DBBADAFABEBEJA@@BCDDFDD@BFHD@DBFFBB@BADBJADADAB@NBFBB@BAB@B@B@DEHAF@BBB@BB@@B@D@@CBCBABABCDEBGDC@C@ADDDBB@BAD@@BB@B@BCBCJ@BA@A@GAE@ABAB@BCBAB@DAB@@BBHBJDB@@B@BLDBDD@@BIJFHBH@F@DFFDHBJDF@F@J@HBDBF@DCF@B@BBB@@D@LBJBBBD@B@B@B@N@B@B@BABADCB@B@@@BBBJ@BAHAFAHCFAJCHAJ@FGHEDK@EBIHEFC@IAE@OBKBQICGEAGAEDADBFALBBLRBF@BAB@FBDLLDH@B@JCB@BAFDFDDFHHD@BB@BD@B@B@D@@B@DBFFDFBBFDFDHF@@BBBB@B@@AB@BB@@B@B@BA@AB@B@BAD@B@DADBHBBD@D@B@B@BABAB@DBB@BBBBBBBDBB@BB@DBB@BB@B@H@B@D@@@BBBBB@BBB@B@D@B@B@BB@@DDDBBBDBDBB@B@D@BABABAB@@@BBBBB@B@B@BA@ABABCB@B@B@BBBBBB@@D@@BD@@BBDBB@BB@BBBBD@D@B@B@@BBB@FBDBD@B@B@BBHBFBHAD@DBB@D@BAB@BAD@D@B@DBD@BB@A@AAC@ABA@C@@@ABA@A@ABAD@D@BABA@A@EAA@C@K@ABALG@ADGDIBGDIAIEKKWM_@E@IDIDKDGBIDGDCFGHCdALBH@JBLBRFNDHB\\L^NnZFHFFFFHFHHDFDHDPAHBJAJ@@BB@BB@BB@B@B@BB@D@FAB@BBDDDFDFDH@DBDAD@D@B@D@D@@@D@BCH@B@B@BAF@D@B@DBL@B@B@B@B@@@BB@@B@BDB"],"encodeOffsets":[[109051,35064]]}}],"UTF8Encoding":true});}));