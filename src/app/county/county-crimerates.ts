/**
 * A map of german county keys and their respective crime rates.
 *
 * <CountyKey, CrimeRate>
 */
export const COUNTY_CRIME_RATES = new Map<string, number>([
  ['01001', 9627],
  ['01002', 9069],
  ['01003', 10022],
  ['01004', 14338],
  ['01051', 5094],
  ['01053', 5099],
  ['01054', 5000],
  ['01055', 6336],
  ['01056', 5900],
  ['01057', 4133],
  ['01058', 4591],
  ['01059', 4564],
  ['01060', 5541],
  ['01061', 5582],
  ['01062', 5437],
  ['02000', 11231],
  ['03101', 7919],
  ['03102', 6074],
  ['03103', 7166],
  ['03151', 3961],
  ['03153', 6418],
  ['03154', 6262],
  ['03155', 5117],
  ['03157', 5318],
  ['03158', 3780],
  ['03159', 6348],
  ['03241', 9182],
  ['03251', 4774],
  ['03252', 5403],
  ['03254', 5963],
  ['03255', 4700],
  ['03256', 5541],
  ['03257', 5922],
  ['03351', 6597],
  ['03352', 4951],
  ['03353', 5022],
  ['03354', 5307],
  ['03355', 6802],
  ['03356', 4204],
  ['03357', 5203],
  ['03358', 7290],
  ['03359', 5374],
  ['03360', 5206],
  ['03361', 5221],
  ['03401', 6896],
  ['03402', 7088],
  ['03403', 7677],
  ['03404', 10348],
  ['03405', 10654],
  ['03451', 3731],
  ['03452', 5349],
  ['03453', 4054],
  ['03454', 5643],
  ['03455', 5022],
  ['03456', 5406],
  ['03457', 5401],
  ['03458', 4267],
  ['03459', 4159],
  ['03460', 4569],
  ['03461', 5226],
  ['03462', 5922],
  ['04011', 11569],
  ['04012', 10577],
  ['05111', 10419],
  ['05112', 8457],
  ['05113', 8174],
  ['05114', 9060],
  ['05116', 7474],
  ['05117', 5645],
  ['05119', 7139],
  ['05120', 6268],
  ['05122', 6234],
  ['05124', 8476],
  ['05154', 5869],
  ['05158', 5527],
  ['05162', 5504],
  ['05166', 5311],
  ['05170', 5062],
  ['05314', 8089],
  ['05315', 11308],
  ['05316', 6736],
  ['05334', 8006],
  ['05358', 6198],
  ['05362', 6416],
  ['05366', 4840],
  ['05370', 5490],
  ['05374', 3943],
  ['05378', 3998],
  ['05382', 4396],
  ['05512', 5658],
  ['05513', 8416],
  ['05515', 8370],
  ['05554', 5583],
  ['05558', 4803],
  ['05562', 6716],
  ['05566', 4986],
  ['05570', 4486],
  ['05711', 6687],
  ['05754', 4394],
  ['05758', 4150],
  ['05762', 3898],
  ['05766', 3776],
  ['05770', 4504],
  ['05774', 5013],
  ['05911', 8162],
  ['05913', 10515],
  ['05914', 7406],
  ['05915', 7588],
  ['05916', 8313],
  ['05954', 5101],
  ['05958', 4799],
  ['05962', 5116],
  ['05966', 4000],
  ['05970', 5239],
  ['05974', 5295],
  ['05978', 5713],
  ['06411', 6560],
  ['06412', 15194],
  ['06413', 7710],
  ['06414', 7232],
  ['06431', 3233],
  ['06432', 3138],
  ['06433', 3926],
  ['06434', 3819],
  ['06435', 4134],
  ['06436', 4219],
  ['06437', 2664],
  ['06438', 4205],
  ['06439', 2923],
  ['06440', 3466],
  ['06531', 6085],
  ['06532', 3460],
  ['06533', 4388],
  ['06534', 4166],
  ['06535', 3894],
  ['06611', 9106],
  ['06631', 4096],
  ['06632', 3983],
  ['06633', 3076],
  ['06634', 3404],
  ['06635', 3632],
  ['06636', 4390],
  ['07111', 10055],
  ['07131', 5809],
  ['07132', 5191],
  ['07133', 5606],
  ['07134', 6018],
  ['07135', 4364],
  ['07137', 4788],
  ['07138', 5560],
  ['07140', 4400],
  ['07141', 4701],
  ['07143', 4384],
  ['07211', 9992],
  ['07231', 4726],
  ['07232', 4004],
  ['07233', 5544],
  ['07235', 3880],
  ['07311', 7131],
  ['07312', 11568],
  ['07313', 9085],
  ['07314', 9481],
  ['07315', 8032],
  ['07316', 7059],
  ['07317', 8704],
  ['07318', 9553],
  ['07319', 7772],
  ['07320', 7351],
  ['07331', 3719],
  ['07332', 4933],
  ['07333', 4461],
  ['07334', 5444],
  ['07335', 4790],
  ['07336', 5756],
  ['07337', 4559],
  ['07338', 4512],
  ['07339', 4425],
  ['07340', 2900],
  ['08111', 8560],
  ['08115', 4232],
  ['08116', 4822],
  ['08117', 4200],
  ['08118', 4041],
  ['08119', 4376],
  ['08121', 6908],
  ['08125', 3241],
  ['08126', 3252],
  ['08127', 3422],
  ['08128', 3939],
  ['08135', 4435],
  ['08136', 3928],
  ['08211', 10545],
  ['08212', 8779],
  ['08215', 3814],
  ['08216', 4691],
  ['08221', 9116],
  ['08222', 10124],
  ['08225', 3225],
  ['08226', 4414],
  ['08231', 7340],
  ['08235', 2744],
  ['08236', 2534],
  ['08237', 3479],
  ['08311', 10053],
  ['08315', 4586],
  ['08316', 3802],
  ['08317', 6085],
  ['08325', 3028],
  ['08326', 3741],
  ['08327', 3708],
  ['08335', 6381],
  ['08336', 7277],
  ['08337', 3849],
  ['08415', 4708],
  ['08416', 4176],
  ['08417', 3473],
  ['08421', 8458],
  ['08425', 3118],
  ['08426', 3366],
  ['08435', 4618],
  ['08436', 4766],
  ['08437', 4735],
  ['09161', 6562],
  ['09162', 6131],
  ['09163', 8153],
  ['09171', 3308],
  ['09172', 7459],
  ['09173', 3286],
  ['09174', 3033],
  ['09175', 3094],
  ['09176', 2529],
  ['09177', 3935],
  ['09178', 6421],
  ['09179', 3280],
  ['09180', 4763],
  ['09181', 3238],
  ['09182', 3723],
  ['09183', 3727],
  ['09184', 3379],
  ['09185', 3477],
  ['09186', 3215],
  ['09187', 4384],
  ['09188', 3413],
  ['09189', 3100],
  ['09190', 3473],
  ['09261', 7712],
  ['09262', 8816],
  ['09263', 7306],
  ['09271', 4625],
  ['09272', 2677],
  ['09273', 2739],
  ['09274', 2626],
  ['09275', 3372],
  ['09276', 2988],
  ['09277', 3150],
  ['09278', 2561],
  ['09279', 3116],
  ['09361', 6109],
  ['09362', 8511],
  ['09363', 7420],
  ['09371', 2679],
  ['09372', 3022],
  ['09373', 2494],
  ['09374', 3878],
  ['09375', 2322],
  ['09376', 3921],
  ['09377', 3746],
  ['09461', 10203],
  ['09462', 6594],
  ['09463', 7318],
  ['09464', 8465],
  ['09471', 2676],
  ['09472', 2715],
  ['09473', 3365],
  ['09474', 2766],
  ['09475', 5021],
  ['09476', 3491],
  ['09477', 3980],
  ['09478', 4229],
  ['09479', 5527],
  ['09561', 7625],
  ['09562', 5492],
  ['09563', 4263],
  ['09564', 7620],
  ['09565', 3713],
  ['09571', 3071],
  ['09572', 2557],
  ['09573', 3666],
  ['09574', 3103],
  ['09575', 2813],
  ['09576', 2700],
  ['09577', 3671],
  ['09661', 7598],
  ['09662', 8739],
  ['09663', 7783],
  ['09671', 2315],
  ['09672', 2940],
  ['09673', 2838],
  ['09674', 2765],
  ['09675', 3873],
  ['09676', 3147],
  ['09677', 2731],
  ['09678', 2578],
  ['09679', 2298],
  ['09761', 7252],
  ['09762', 5171],
  ['09763', 5236],
  ['09764', 6314],
  ['09771', 2377],
  ['09772', 2933],
  ['09773', 2945],
  ['09774', 4012],
  ['09775', 4658],
  ['09776', 5562],
  ['09777', 2835],
  ['09778', 3148],
  ['09779', 3799],
  ['09780', 2514],
  ['10041', 9705],
  ['10042', 5669],
  ['10043', 6092],
  ['10044', 6738],
  ['10045', 5259],
  ['10046', 4430],
  ['11000', 14086],
  ['12051', 10659],
  ['12052', 9231],
  ['12053', 9695],
  ['12054', 8683],
  ['12060', 6308],
  ['12061', 8540],
  ['12062', 5238],
  ['12063', 6525],
  ['12064', 5803],
  ['12065', 5945],
  ['12066', 5931],
  ['12067', 6811],
  ['12068', 7722],
  ['12069', 5355],
  ['12070', 5698],
  ['12071', 5714],
  ['12072', 6301],
  ['12073', 6659],
  ['13003', 9463],
  ['13004', 11416],
  ['13071', 6227],
  ['13072', 5066],
  ['13073', 7125],
  ['13074', 5992],
  ['13075', 6438],
  ['13076', 5818],
  ['14511', 8908],
  ['14521', 2997],
  ['14522', 3813],
  ['14523', 5414],
  ['14524', 4689],
  ['14612', 8361],
  ['14625', 4636],
  ['14626', 7585],
  ['14627', 4525],
  ['14628', 4465],
  ['14713', 12196],
  ['14729', 5425],
  ['14730', 6580],
  ['15001', 10172],
  ['15002', 11455],
  ['15003', 10299],
  ['15081', 5613],
  ['15082', 6923],
  ['15083', 5665],
  ['15084', 6321],
  ['15085', 7250],
  ['15086', 6667],
  ['15087', 6471],
  ['15088', 6055],
  ['15089', 6045],
  ['15090', 6550],
  ['15091', 6404],
  ['16051', 9684],
  ['16052', 10042],
  ['16053', 6901],
  ['16054', 8841],
  ['16055', 8497],
  ['16056', 7689],
  ['16061', 4315],
  ['16062', 6436],
  ['16063', 3263],
  ['16064', 5847],
  ['16065', 6460],
  ['16066', 4175],
  ['16067', 5072],
  ['16068', 4253],
  ['16069', 3342],
  ['16070', 4789],
  ['16071', 4962],
  ['16072', 5519],
  ['16073', 4822],
  ['16074', 4960],
  ['16075', 4925],
  ['16076', 4223],
]);
