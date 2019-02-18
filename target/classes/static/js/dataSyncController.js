var app=angular.module("app-datasync",[]);
app.controller("datasyncCtrl",function($scope,$http){
$scope.DataOrgunits=

[

	{
			"id": 1,
			"keyentity": "rdc",
			"labelentity": "Republique Democratique du Congo",
			"category": "parent",
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 2,
			"keyentity": "kin",
			"labelentity": "Kinshasa",
			"category": "child",
			"idparent": {
					"id": 1,
					"keyentity": "rdc",
					"labelentity": "Republique Democratique du Congo",
					"category": "parent",
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.182657168840809!3d-4.401290646277203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1532889172321\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 3,
			"keyentity": "kng",
			"labelentity": "Kongo Central",
			"category": "Child",
			"idparent": {
					"id": 1,
					"keyentity": "rdc",
					"labelentity": "Republique Democratique du Congo",
					"category": "parent",
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 4,
			"keyentity": "bdd",
			"labelentity": "Bandundu",
			"category": "Child",
			"idparent": {
					"id": 1,
					"keyentity": "rdc",
					"labelentity": "Republique Democratique du Congo",
					"category": "parent",
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4073404.674001085!2d16.215985546019116!3d-4.423351984234209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a166a9098839519%3A0x765e65e2f5ffdd19!2sBandundu!5e0!3m2!1sfr!2scd!4v1532890680329\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 5,
			"keyentity": "Kat",
			"labelentity": "Katanga",
			"category": "Child",
			"idparent": {
					"id": 1,
					"keyentity": "rdc",
					"labelentity": "Republique Democratique du Congo",
					"category": "parent",
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 6,
			"keyentity": "eqt",
			"labelentity": "Equateur",
			"category": "Child",
			"idparent": {
					"id": 1,
					"keyentity": "rdc",
					"labelentity": "Republique Democratique du Congo",
					"category": "parent",
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8169031.029096327!2d15.983350066814177!3d1.3042315904845283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10a759c6a20610a5%3A0xf9db486da6873f09!2zw4lxdWF0ZXVy!5e0!3m2!1sfr!2scd!4v1532890964329\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 7,
			"keyentity": "kao",
			"labelentity": "Kasai Oriental",
			"category": "Child",
			"idparent": {
					"id": 1,
					"keyentity": "rdc",
					"labelentity": "Republique Democratique du Congo",
					"category": "parent",
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4071036.0849340246!2d21.843211290766835!3d-4.834932588920528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19890cd2cfe4f413%3A0x71ae688f7d40d60b!2sKasa%C3%AF+oriental!5e0!3m2!1sfr!2scd!4v1532891053147\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 8,
			"keyentity": "kac",
			"labelentity": "Kasai Occidental",
			"category": "Child",
			"idparent": {
					"id": 1,
					"keyentity": "rdc",
					"labelentity": "Republique Democratique du Congo",
					"category": "parent",
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4069295.4408845794!2d19.466747541970076!3d-5.116380611326285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a21a66863c8de11%3A0xb02129df12aad744!2sKasa%C3%AF+occidental!5e0!3m2!1sfr!2scd!4v1532891076392\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 9,
			"keyentity": "nkv",
			"labelentity": "Nord Kivu",
			"category": "Child",
			"idparent": {
					"id": 1,
					"keyentity": "rdc",
					"labelentity": "Republique Democratique du Congo",
					"category": "parent",
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042692.2459968044!2d27.47157956296882!3d-0.5517987964596072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19e0865560e56fc3%3A0x341e4dce5d8e1b94!2sNord-Kivu!5e0!3m2!1sfr!2scd!4v1532891111665\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 10,
			"keyentity": "skv",
			"labelentity": "Sud Kivu",
			"category": "Child",
			"idparent": {
					"id": 1,
					"keyentity": "rdc",
					"labelentity": "Republique Democratique du Congo",
					"category": "parent",
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039433.4744397798!2d26.97492694601387!3d-3.283484999799054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ea2ec21f044c99%3A0x95fd4a4a6e234625!2sSud-Kivu!5e0!3m2!1sfr!2scd!4v1532891130713\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 11,
			"keyentity": "por",
			"labelentity": "Province Orientale",
			"category": "Child",
			"idparent": {
					"id": 1,
					"keyentity": "rdc",
					"labelentity": "Republique Democratique du Congo",
					"category": "parent",
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8167843.657372684!2d22.299097954880025!3d1.629476169473721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x175ad0ec9ef615e5%3A0x9bad1b99a73f8ddf!2sProvince+orientale!5e0!3m2!1sfr!2scd!4v1532891157597\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 12,
			"keyentity": "man",
			"labelentity": "Maniema",
			"category": "Child",
			"idparent": {
					"id": 1,
					"keyentity": "rdc",
					"labelentity": "Republique Democratique du Congo",
					"category": "parent",
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4081561.111916044!2d24.4046916415256!3d-2.5396449565059562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ef0ba259cff31f%3A0x88b7f9d0c20b2fd!2sManiema!5e0!3m2!1sfr!2scd!4v1532891268852\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 13,
			"keyentity": "ndj",
			"labelentity": "Ndjili",
			"category": "Child",
			"idparent": {
					"id": 2,
					"keyentity": "kin",
					"labelentity": "Kinshasa",
					"category": "child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.182657168840809!3d-4.401290646277203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1532889172321\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63647.48163020698!2d15.339051098288834!3d-4.417137978197869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a381598590d8d%3A0x7367d81ff6f52598!2sNdjili%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532907422455\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 14,
			"keyentity": "nga",
			"labelentity": "Ngaliema",
			"category": "Child",
			"idparent": {
					"id": 2,
					"keyentity": "kin",
					"labelentity": "Kinshasa",
					"category": "child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.182657168840809!3d-4.401290646277203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1532889172321\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127302.13406386298!2d15.173317926092498!3d-4.375155893651654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a31bb149a2299%3A0xcd21dd79837324a!2sNgaliema%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532887811392\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 15,
			"keyentity": "luk",
			"labelentity": "Lukunga",
			"category": "Child",
			"idparent": {
					"id": 2,
					"keyentity": "kin",
					"labelentity": "Kinshasa",
					"category": "child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.182657168840809!3d-4.401290646277203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1532889172321\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254585.74204886626!2d15.106704419312647!3d-4.429312313513604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b1cf99a36d7%3A0xb935969bb6480ac3!2sLukunga!5e0!3m2!1sfr!2scd!4v1532887874610\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 16,
			"keyentity": "lky",
			"labelentity": "Lukaya",
			"category": "Child",
			"idparent": {
					"id": 2,
					"keyentity": "kin",
					"labelentity": "Kinshasa",
					"category": "child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.182657168840809!3d-4.401290646277203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1532889172321\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15912.720976246535!2d15.371906066928247!3d-4.377309896818678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a37bfaa54c73b%3A0x1499190fa6699b61!2sLukaya%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532887935364\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 17,
			"keyentity": "mal",
			"labelentity": "Maluku",
			"category": "Child",
			"idparent": {
					"id": 2,
					"keyentity": "kin",
					"labelentity": "Kinshasa",
					"category": "child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.182657168840809!3d-4.401290646277203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1532889172321\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127287.97384201904!2d15.351845676428338!3d-4.457678382723569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a38640fd18ac9%3A0x367c5a95e692f51c!2sKimbanseke%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532887991801\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 18,
			"keyentity": "mbz",
			"labelentity": "Mbanza Lemba",
			"category": "Child",
			"idparent": {
					"id": 2,
					"keyentity": "kin",
					"labelentity": "Kinshasa",
					"category": "child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.182657168840809!3d-4.401290646277203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1532889172321\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.0806398559407!2d15.31678391459696!3d-4.396010696805174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3756aaaaaaab%3A0xea4e7f8e61078257!2sMbanza-lemba!5e0!3m2!1sfr!2scd!4v1532888025515\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 19,
			"keyentity": "mut",
			"labelentity": "Mutendi",
			"category": "Child",
			"idparent": {
					"id": 2,
					"keyentity": "kin",
					"labelentity": "Kinshasa",
					"category": "child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.182657168840809!3d-4.401290646277203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1532889172321\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15910.089792058285!2d15.19527187420652!3d-4.499376547690538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a2346ed3818ef%3A0xd31e638863022e8d!2sMitendi!5e0!3m2!1sfr!2scd!4v1532888102265\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 20,
			"keyentity": "knk",
			"labelentity": "Kinkole",
			"category": "Child",
			"idparent": {
					"id": 2,
					"keyentity": "kin",
					"labelentity": "Kinshasa",
					"category": "child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.182657168840809!3d-4.401290646277203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1532889172321\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15913.771710512257!2d15.499391474195935!3d-4.327603949672037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a4eae28bfcc47%3A0x66fc9755d2173c3!2sKinkole!5e0!3m2!1sfr!2scd!4v1532888685369\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 21,
			"keyentity": "bbw",
			"labelentity": "Bibwa",
			"category": "Child",
			"idparent": {
					"id": 2,
					"keyentity": "kin",
					"labelentity": "Kinshasa",
					"category": "child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.182657168840809!3d-4.401290646277203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1532889172321\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7956.189704778875!2d15.368081273498168!3d-4.393347137228413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a378f68b3b3c9%3A0x431ac3d788767ebf!2sQuartier+1%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532888781112\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 22,
			"keyentity": "kkm",
			"labelentity": "Kikimi",
			"category": "Child",
			"idparent": {
					"id": 2,
					"keyentity": "kin",
					"labelentity": "Kinshasa",
					"category": "child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.182657168840809!3d-4.401290646277203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1532889172321\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.1521348607116!2d15.312626914596896!3d-4.382595496814857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a374ae970d157%3A0xe0844dd9b261c447!2sKikimi%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532888902960\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 23,
			"keyentity": "mkg",
			"labelentity": "Mikonga",
			"category": "Child",
			"idparent": {
					"id": 2,
					"keyentity": "kin",
					"labelentity": "Kinshasa",
					"category": "child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.182657168840809!3d-4.401290646277203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1532889172321\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.0507916060783!2d15.40895431459702!3d-4.401599296801161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a47fef4dd5ba5%3A0x483602c39e28d039!2sMikonga%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532889138787\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
	},
	{
			"id": 25,
			"keyentity": "kk",
			"labelentity": "Muyi",
			"category": "Child",
			"idparent": {
					"id": 2,
					"keyentity": "kin",
					"labelentity": "Kinshasa",
					"category": "child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.182657168840809!3d-4.401290646277203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1532889172321\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31823.740788658615!2d15.35656111762878!3d-4.417138594554005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a381598590d8d%3A0x7367d81ff6f52598!2sNdjili%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532989898221\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "9",
			"lng": "90"
	},
	{
			"id": 26,
			"keyentity": "mat",
			"labelentity": "Matadi",
			"category": "Child",
			"idparent": {
					"id": 3,
					"keyentity": "kng",
					"labelentity": "Kongo Central",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 27,
			"keyentity": "mpz",
			"labelentity": "Mpozo",
			"category": "Child",
			"idparent": {
					"id": 26,
					"keyentity": "mat",
					"labelentity": "Matadi",
					"category": "Child",
					"idparent": {
							"id": 3,
							"keyentity": "kng",
							"labelentity": "Kongo Central",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
					"lat": "0",
					"lng": "0"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7938.45333821399!2d13.494341120508382!3d-5.823627909621742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccb7f4879404d%3A0x2f5328a856b2b94e!2sMpozo!5e0!3m2!1sfr!2scd!4v1541350985531\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 28,
			"keyentity": "flv",
			"labelentity": "Fleuve",
			"category": "Child",
			"idparent": {
					"id": 26,
					"keyentity": "mat",
					"labelentity": "Matadi",
					"category": "Child",
					"idparent": {
							"id": 3,
							"keyentity": "kng",
							"labelentity": "Kongo Central",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
					"lat": "0",
					"lng": "0"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 29,
			"keyentity": "bma",
			"labelentity": "Boma",
			"category": "Child",
			"idparent": {
					"id": 3,
					"keyentity": "kng",
					"labelentity": "Kongo Central",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 30,
			"keyentity": "kas",
			"labelentity": "Kasangulu",
			"category": "Child",
			"idparent": {
					"id": 3,
					"keyentity": "kng",
					"labelentity": "Kongo Central",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 31,
			"keyentity": "tla",
			"labelentity": "Tshela",
			"category": "Chilld",
			"idparent": {
					"id": 3,
					"keyentity": "kng",
					"labelentity": "Kongo Central",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 32,
			"keyentity": "lkl",
			"labelentity": "Lukula",
			"category": "Child",
			"idparent": {
					"id": 3,
					"keyentity": "kng",
					"labelentity": "Kongo Central",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 33,
			"keyentity": "mnda",
			"labelentity": "Muanda",
			"category": "Child",
			"idparent": {
					"id": 3,
					"keyentity": "kng",
					"labelentity": "Kongo Central",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 34,
			"keyentity": "kmp",
			"labelentity": "Kimpense",
			"category": "Child",
			"idparent": {
					"id": 3,
					"keyentity": "kng",
					"labelentity": "Kongo Central",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 35,
			"keyentity": "mzg",
			"labelentity": "Mbanza Ngungu",
			"category": "Child",
			"idparent": {
					"id": 3,
					"keyentity": "kng",
					"labelentity": "Kongo Central",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 36,
			"keyentity": "iks",
			"labelentity": "Inkisi",
			"category": "Child",
			"idparent": {
					"id": 3,
					"keyentity": "kng",
					"labelentity": "Kongo Central",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 37,
			"keyentity": "lka",
			"labelentity": "Lukala",
			"category": "Child",
			"idparent": {
					"id": 3,
					"keyentity": "kng",
					"labelentity": "Kongo Central",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 38,
			"keyentity": "lzi",
			"labelentity": "Luozi",
			"category": "Child",
			"idparent": {
					"id": 3,
					"keyentity": "kng",
					"labelentity": "Kongo Central",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 39,
			"keyentity": "mle",
			"labelentity": "Mfidi Malele",
			"category": "Child",
			"idparent": {
					"id": 3,
					"keyentity": "kng",
					"labelentity": "Kongo Central",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 40,
			"keyentity": "kme",
			"labelentity": "Kalemie",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"lat": "0",
			"lng": "0"
	},
	{
			"id": 41,
			"keyentity": "kna",
			"labelentity": "Kaniama",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 42,
			"keyentity": "bkm",
			"labelentity": "Bukama",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 43,
			"keyentity": "kgl",
			"labelentity": "Kongolo",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 44,
			"keyentity": "kbl",
			"labelentity": "Kabalo",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 45,
			"keyentity": "pwt",
			"labelentity": "Pweto",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 46,
			"keyentity": "lsh",
			"labelentity": "Lubumbashi",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 47,
			"keyentity": "km1",
			"labelentity": "Kimilolo 1",
			"category": "Child",
			"idparent": {
					"id": 46,
					"keyentity": "lsh",
					"labelentity": "Lubumbashi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 48,
			"keyentity": "km2",
			"labelentity": "Kimilolo 2",
			"category": "Child",
			"idparent": {
					"id": 46,
					"keyentity": "lsh",
					"labelentity": "Lubumbashi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 49,
			"keyentity": "km3",
			"labelentity": "Kimilolo 3",
			"category": "Child",
			"idparent": {
					"id": 46,
					"keyentity": "lsh",
					"labelentity": "Lubumbashi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 50,
			"keyentity": "kpa",
			"labelentity": "Kasapa",
			"category": "Child",
			"idparent": {
					"id": 46,
					"keyentity": "lsh",
					"labelentity": "Lubumbashi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 51,
			"keyentity": "lno",
			"labelentity": "Luano",
			"category": "Child",
			"idparent": {
					"id": 46,
					"keyentity": "lsh",
					"labelentity": "Lubumbashi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 52,
			"keyentity": "uni",
			"labelentity": "Unilu",
			"category": "Child",
			"idparent": {
					"id": 46,
					"keyentity": "lsh",
					"labelentity": "Lubumbashi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 53,
			"keyentity": "rwh",
			"labelentity": "Rwashi",
			"category": "Child",
			"idparent": {
					"id": 46,
					"keyentity": "lsh",
					"labelentity": "Lubumbashi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 54,
			"keyentity": "ysu",
			"labelentity": "Yesu Mtumishi",
			"category": "Child",
			"idparent": {
					"id": 46,
					"keyentity": "lsh",
					"labelentity": "Lubumbashi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 55,
			"keyentity": "kph",
			"labelentity": "Kipushi",
			"category": "Child",
			"idparent": {
					"id": 46,
					"keyentity": "lsh",
					"labelentity": "Lubumbashi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 56,
			"keyentity": "kbs",
			"labelentity": "Kasumbalesa",
			"category": "Child",
			"idparent": {
					"id": 46,
					"keyentity": "lsh",
					"labelentity": "Lubumbashi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 57,
			"keyentity": "lks",
			"labelentity": "Likasi",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 58,
			"keyentity": "lwb",
			"labelentity": "Lwambo",
			"category": "Child",
			"idparent": {
					"id": 57,
					"keyentity": "lks",
					"labelentity": "Likasi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 59,
			"keyentity": "kpb",
			"labelentity": "Kampemba",
			"category": "Child",
			"idparent": {
					"id": 57,
					"keyentity": "lks",
					"labelentity": "Likasi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 60,
			"keyentity": "lk3",
			"labelentity": "Likasi 3",
			"category": "Child",
			"idparent": {
					"id": 57,
					"keyentity": "lks",
					"labelentity": "Likasi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 61,
			"keyentity": "klz",
			"labelentity": "Kolwezi",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 62,
			"keyentity": "klz1",
			"labelentity": "Kolwezi1",
			"category": "Child",
			"idparent": {
					"id": 61,
					"keyentity": "klz",
					"labelentity": "Kolwezi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 63,
			"keyentity": "klz2",
			"labelentity": "Kolwezi2",
			"category": "Child",
			"idparent": {
					"id": 61,
					"keyentity": "klz",
					"labelentity": "Kolwezi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 64,
			"keyentity": "klz3",
			"labelentity": "Kolwezi3",
			"category": "Child",
			"idparent": {
					"id": 61,
					"keyentity": "klz",
					"labelentity": "Kolwezi",
					"category": "Child",
					"idparent": {
							"id": 5,
							"keyentity": "Kat",
							"labelentity": "Katanga",
							"category": "Child",
							"idparent": {
									"id": 1,
									"keyentity": "rdc",
									"labelentity": "Republique Democratique du Congo",
									"category": "parent",
									"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
							},
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					}
			}
	},
	{
			"id": 65,
			"keyentity": "kma",
			"labelentity": "Kamina",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 66,
			"keyentity": "mba",
			"labelentity": "Moba",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 67,
			"keyentity": "dlo",
			"labelentity": "Dilolo",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 68,
			"keyentity": "sda",
			"labelentity": "Sandoa",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 69,
			"keyentity": "sda",
			"labelentity": "Sandoa",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 70,
			"keyentity": "kas",
			"labelentity": "Kasenga",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 71,
			"keyentity": "nzu",
			"labelentity": "Nyunzu",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 72,
			"keyentity": "mkl",
			"labelentity": "Malemba Nkulu",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 73,
			"keyentity": "akr",
			"labelentity": "Ankoro",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 74,
			"keyentity": "kbg",
			"labelentity": "Kabongo",
			"category": "Child",
			"idparent": {
					"id": 5,
					"keyentity": "Kat",
					"labelentity": "Katanga",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 75,
			"keyentity": "bkv",
			"labelentity": "Bukavu",
			"category": "Child",
			"idparent": {
					"id": 10,
					"keyentity": "skv",
					"labelentity": "Sud Kivu",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039433.4744397798!2d26.97492694601387!3d-3.283484999799054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ea2ec21f044c99%3A0x95fd4a4a6e234625!2sSud-Kivu!5e0!3m2!1sfr!2scd!4v1532891130713\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	},
	{
			"id": 76,
			"keyentity": "kmt",
			"labelentity": "Kamituga",
			"category": "Child",
			"idparent": {
					"id": 10,
					"keyentity": "skv",
					"labelentity": "Sud Kivu",
					"category": "Child",
					"idparent": {
							"id": 1,
							"keyentity": "rdc",
							"labelentity": "Republique Democratique du Congo",
							"category": "parent",
							"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
					},
					"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039433.4744397798!2d26.97492694601387!3d-3.283484999799054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ea2ec21f044c99%3A0x95fd4a4a6e234625!2sSud-Kivu!5e0!3m2!1sfr!2scd!4v1532891130713\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			}
	}

];

$scope.getFullNameFactory=function(keyname){
	var value=''
	$scope.DataOrgunits.forEach(function(e) {
		if (e.keyentity.toString().toLowerCase()==keyname.toString().toLowerCase()) 
			value=e.labelentity;
	});
	return value;
}

	var datas={
			"text" : "Republique Democratique du Congo",
			"opened":"true",
			"children":[]
	};
	$scope.dplist=[];
	$scope.childFactories=[];
	$scope.responseData;
	$scope.orgunitSelected;
	$http.get("/factory/orgunits").then(function(response){
		$scope.responseData=response.data;
		response.data.forEach(function(e){
			if(e.idparent!=undefined && e.idparent.id==1){
				$scope.orgunit={
						id:e.id,
						name:e.labelentity,
						keyname:e.keyentity,
						childs:[]
				};
				for(var i=0;i<$scope.responseData.length;i++){
					if($scope.responseData[i].category=="Child" && ($scope.responseData[i].idparent.id==e.id)){
						//$scope.childFactories.push(e);
						$scope.responseData[i].childs=[];
							
						$scope.orgunit.childs.push($scope.responseData[i])
					}
					
				}
				
				
				
				$scope.dplist.push($scope.orgunit);
			}else {
				
				$scope.dplist.forEach(function(x,i){
					if (x.childs.length>0) {
						x.childs.forEach(function(y,j) {
						if (e.idparent.id==y.id) {
							//console.log('Child found is :',e)
							//console.log('Index :',j)
							x.childs[j].childs.push(e);
						}	
						});
					}
				})
			}
			//console.log(e)
		
		});
		console.log('DP LIST :',$scope.dplist);	
		$scope.dplist.forEach(function(e){
			if(e.childs.length>0){
				var childFunc=[];
				var childFunc2=[];
				for(var i=0;i<e.childs.length;i++){
					if (e.childs[i].childs!=undefined && e.childs[i].childs.length>0) {
						
						for (var j = 0; j< e.childs[i].childs.length; j++) {
							childFunc2.push
							(
									{
										"text":e.childs[i].childs[j].labelentity,
										"keyname":e.childs[i].childs[j].keyentity,
										"category":"factory",
										"parent":e.childs[i].keyentity,
										"level":"2"
									}
							);
							
						}
						
						childFunc.push
						(
								{
									"text":e.childs[i].labelentity,
									"keyname":e.childs[i].keyentity,
									"category":"town",
									"parent":e.keyname,
									"children":childFunc2
								}
						);
					}else{
						childFunc.push
						(
								{
									"text":e.childs[i].labelentity,
									"keyname":e.childs[i].keyentity,
									"category":"factory",
									"parent":e.keyname
								}
						);
					}
					
				}
				datas.children.push(
						{
							"text":e.name,
							"children":childFunc,
							"keyname":e.keyname,
							"category":"town"
						}
				);
			}else{
				datas.children.push(
						{
							"text":e.name,
							"keyname":e.keyname,
							"category":"town"
						}
				);
			}
			
		});
		
		$('#data').jstree({
			'core' : {
				'data' : [
					{ "text" : "Republique Democratique du Congo","opened":true, "children" : datas.children,"keyname":"drc"}
				]
			}
		});
		var btnRunproc=document.querySelector('#btnRunProc');
		var btnSendData=document.querySelector('#btnSendData');
		$('#data')
		.on("changed.jstree", function (e, data) {
			if(data.selected.length) {
				//alert('The selected node is: ' + data.instance.get_node(data.selected[0]).text);
				//console.log(data.instance.get_node(data.selected[0]).original);
				$scope.orgunitSelected=data.instance.get_node(data.selected[0]).original;
				console.log($scope.orgunitSelected);
				
				btnRunproc.disabled=false;
				

			}
		})
	},function(error){
		
	});


	$scope.getDivisionProvincial=function(data){
		console.log("data DP: ",data);
		$scope.childFactories=[];
		console.log("Size array:",$scope.childFactories.length);
		$scope.responseData.forEach(function(e){
			if(e.category=="Child" && (e.idparent.id==data.id)){
				$scope.childFactories.push(e);
			}
		});
		console.log("List Child :",$scope.childFactories);
	}
	$scope.months=[
		{id:1,label:'Janvier'},
		{id:2,label:'Fevrier'},
		{id:3,label:'Mars'},
		{id:4,label:'Avril'},
		{id:5,label:'Mai'},
		{id:6,label:'Juin'},
		{id:7,label:'Juilet'},
		{id:8,label:'Aout'},
		{id:9,label:'Septembre'},
		{id:10,label:'Octobre'},
		{id:11,label:'Novembre'},
		{id:12,label:'Decembre'}
	];
	
	
	$scope.getRunProcess=function(){
		$scope.tabDataSync=[];
	
		$scope.indexMonth=0;
		if ($scope.monthdatasync!=undefined) {
			$scope.months.forEach(function(e){
				if (e.label==$scope.monthdatasync) 
					$scope.indexMonth=e.id;
				
				
			});
			//alert(indexMonth)
		}
		var pbar=document.querySelector('#pbar');
		pbar.style="width:80%;margin:0 auto;display:inline-block;";
		var url='';
		switch($scope.orgunitSelected.category){
			case 'town':
				if ($scope.indexMonth==0) {
					url="/api/datasync/town/"+$scope.orgunitSelected.keyname;
				} else {
					url="/api/datasync/town/"+$scope.orgunitSelected.keyname+ '/'+$scope.indexMonth;
				}
				
				
				break;
			case 'factory':
				if ($scope.monthdatasync!=undefined) {
					url="/api/datasync/ctr_"+$scope.orgunitSelected.parent+"/"+$scope.orgunitSelected.keyname+"/"+$scope.indexMonth
				}else {
					
				}
				
				console.log(url)
				$scope.orgunitFactory=$scope.orgunitSelected.keyname;
				$scope.orgunitSelected.keyname=$scope.orgunitSelected.parent;
				$scope.orguniFactory=$scope.orgunitSelected.keyname
				break;
			default:
				url="/api/datasync/alls";
				$scope.orgunitSelected.keyname=$scope.orgunitSelected.keyname;
				break;
				
		}
		
		console.log(url);
		$http.get(url).then(function(response){
			$scope.dataSync=response.data._children;
			console.log('Children :',response.data._children)
			$scope.dataSync.forEach(function(e,i){
				//console.log($scope.getFullNameFactory(e._children.ctr_kin._value))
				var dataSync={};
				var dataSync2={};
				var dataSync3={};
				var dataSync4={};
				var dataSync5={};
				var usine,factoryname;
				console.log('District',$scope.orgunitSelected.keyname)
				switch ($scope.orgunitSelected.keyname) {
				case 'kin':
						usine=e._children.ctr_kin._value;
						factory=$scope.getFullNameFactory(e._children.ctr_kin._value);
					break;
				case 'mat':
					usine=e._children.ctr_mat._value;
					factory=$scope.getFullNameFactory(e._children.ctr_mat._value);
					
					break;
				case 'kng':
					if (e._children.ctr_mat!=undefined) {
						usine=e._children.ctr_mat._value;
						factory=$scope.getFullNameFactory(e._children.ctr_mat._value);
					} else {
						usine=e._children.ctr_kng._value;
						factory=$scope.getFullNameFactory(e._children.ctr_kng._value);
					}
					
					break;
				case 'bdd':
					usine=e._children.ctr_bdd._value;
					factory=$scope.getFullNameFactory(e._children.ctr_bdd._value);
					
					break;
				case 'Kat':
					usine=e._children.ctr_kat._value;
					if (e._children.ctr_lsh!=undefined) {
						usine=e._children.ctr_lsh._value;
						factory=$scope.getFullNameFactory(e._children.ctr_lsh._value);
					}else {
						if (e._children.ctr_lks!=undefined) {
							usine=e._children.ctr_lks._value;
							factory=$scope.getFullNameFactory(e._children.ctr_lks._value);
						} else {
							if (e._children.ctr_klz!=undefined) {
								usine=e._children.ctr_klz._value;
								factory=$scope.getFullNameFactory(e._children.ctr_klz._value);
							} else {
								usine=e._children.ctr_kat._value;
								factory=$scope.getFullNameFactory(e._children.ctr_kat._value);
							}
						}
					}
					factory=$scope.getFullNameFactory(e._children.ctr_kat._value);
					break;
				case 'eqt':
					usine=e._children.ctr_eqt._value;
					factory=$scope.getFullNameFactory(e._children.ctr_eqt._value);
					break;
				case 'kao':
					usine=e._children.ctr_kao._value;
					factory=$scope.getFullNameFactory(e._children.ctr_kao._value);
					break;
					
				case 'kac':
					usine=e._children.ctr_kac._value;
					factory=$scope.getFullNameFactory(e._children.ctr_kac._value);
					break;
					
				case 'nkv':
					usine=e._children.ctr_nkv._value;
					factory=$scope.getFullNameFactory(e._children.ctr_nkv._value);
					break;
				case 'skv':
					usine=e._children.ctr_skv._value;
					factory=$scope.getFullNameFactory(e._children.ctr_skv._value);
					break;
				default:
					console.log($scope.dataSync)
					//alert('Not found')
					break;
				}
				 
				dataSync.week=1;
				dataSync.aflc=e._children.val_s1_aflc._value;
				dataSync.chaux=e._children.val_s1_chx._value;
				dataSync.Chlore=e._children.val_s1_clre._value;
				dataSync.Gasoil=e._children.val_s1_gsl._value;
				dataSync.Kwh=e._children.val_s1_kwh._value;
				dataSync.Sel=e._children.val_s1_sel._value,
				dataSync.Sulfate=e._children.val_s1_sfte._value;
				dataSync.year=e._children.year_prd_chq._value;
				dataSync.Usine=usine;
				dataSync.FactoryName=factory;	
				dataSync.month=e._children.mois_prd_chq._value
				$scope.tabDataSync.push(dataSync);
				
				dataSync2.week=2;
				dataSync2.aflc=e._children.val_s2_aflc._value;
				dataSync2.chaux=e._children.val_s2_chx._value;
				dataSync2.Chlore=e._children.val_s2_clre._value;
				dataSync2.Gasoil=e._children.val_s2_gsl._value;
				dataSync2.Kwh=e._children.val_s2_kwh._value;
				dataSync2.Sel=e._children.val_s2_sel._value,
				dataSync2.Sulfate=e._children.val_s2_sfte._value;
				dataSync2.month=e._children.mois_prd_chq._value
				dataSync2.year=e._children.year_prd_chq._value;
				dataSync2.Usine=usine;
				dataSync2.FactoryName=factory;	
				$scope.tabDataSync.push(dataSync2);
				
				dataSync3.week=3;
				dataSync3.aflc=e._children.val_s3_aflc._value;
				dataSync3.chaux=e._children.val_s3_chx._value;
				dataSync3.Chlore=e._children.val_s3_clre._value;
				dataSync3.Gasoil=e._children.val_s3_gsl._value;
				dataSync3.Kwh=e._children.val_s3_kwh._value;
				dataSync3.Sel=e._children.val_s3_sel._value,
				dataSync3.Sulfate=e._children.val_s3_sfte._value;
				dataSync3.month=e._children.mois_prd_chq._value;
				dataSync3.year=e._children.year_prd_chq._value;
				dataSync3.Usine=usine;
				dataSync3.FactoryName=factory;	
				$scope.tabDataSync.push(dataSync3);
				
				dataSync4.week=4;
				dataSync4.aflc=e._children.val_s4_aflc._value;
				dataSync4.chaux=e._children.val_s4_chx._value;
				dataSync4.Chlore=e._children.val_s4_clre._value;
				dataSync4.Gasoil=e._children.val_s4_gsl._value;
				dataSync4.Kwh=e._children.val_s4_kwh._value;
				dataSync4.Sel=e._children.val_s4_sel._value,
				dataSync4.Sulfate=e._children.val_s4_sfte._value;
				dataSync4.year=e._children.year_prd_chq._value;
				dataSync4.month=e._children.mois_prd_chq._value
				dataSync4.Usine=usine;
				dataSync4.FactoryName=factory;	
				$scope.tabDataSync.push(dataSync4);
				
				
				dataSync5.week=5;
				if (e._children.s5_aflc._value=="oui") {
					dataSync5.aflc=e._children.val_s5_aflc._value;
				}else {
					dataSync5.aflc=0;
				}
				
				if (e._children.s5_chx._value=="oui") {
					dataSync5.chaux=e._children.val_s5_chx._value;
				}else {
					dataSync5.chaux=0;
				}
				if (e._children.s5_clre._value=="oui") {
					dataSync5.Chlore=e._children.val_s5_clre._value;
				}else {
					dataSync5.Chlore=0;
				}
				
				if (e._children.s5_gsl._value=="oui") {
					dataSync5.Gasoil=e._children.val_s5_gsl._value;
				}else {
					dataSync5.Gasoil=0;
				}
				if (e._children.s5_kwh._value=="oui") {
					dataSync5.Kwh=e._children.val_s5_kwh._value;
				}else {
					dataSync5.Kwh=0;
				}
				if (e._children.s5_sel._value=="oui") {
					dataSync5.Sel=e._children.val_s5_sel._value;
				}else {
					dataSync5.Sel=0;
				}
				if (e._children.s5_sfte._value=="oui") {
					dataSync5.Sulfate=e._children.val_s5_sfte._value;
				}else {
					dataSync5.Sulfate=0;
				}
				dataSync5.year=e._children.year_prd_chq._value;
				dataSync5.Usine=usine;
				dataSync5.FactoryName=factory;
				dataSync5.month=parseInt(e._children.mois_prd_chq._value)
				$scope.tabDataSync.push(dataSync5);
			

				
			});

			$(document).ready(function() {
				try{
					$("#Tdatafile").dataTable().fnDestroy()
					var table=$('#Tdatafile').DataTable({
						aaData:$scope.tabDataSync,
			            bAutoWidth:false,
			            responsive:'true',
			            aoColumns:[
			            	
			                { "data": "week" },
			                { "data": "month"},
			                { "data": "year"},
			                { "data": "aflc" },
			                { "data": "chaux" },
			                { "data": "Chlore" },
			                { "data": "Gasoil" },
			                { "data": "Kwh" },
			                { "data": "Sel" },
			                { "data": "Sulfate" },
			                { "data": "FactoryName" }
			                
			            ]
			           
			        });
					/*$('#datatables-orgunit tbody').on('click', 'tr', function (e) {
			            var data = table.data();
			            var index=e.target._DT_CellIndex.row;
			            //console.log(data);
			        //    alert( 'You clicked on '+data[index].id+'\'s row' );
			            console.log(data);
			            
			    } );
			    */
				}catch(e){
					console.log(e)
				}

			} );
			pbar.style="width:100%;margin:0 auto;display:none;";
			console.log($scope.tabDataSync);
			if ($scope.tabDataSync.length>0) {
				btnSendData.disabled=false;
			} else {
				btnSendData.disabled=true;
			}
		},function(error){
			console.error(error);
		});
		
	}
	
	$scope.sendDataSync=function(){
		if ($scope.tabDataSync.length>0 || $scope.tabDataSync!=undefined) {
			//console.log('Data Sender :', JSON.stringify($scope.tabDataSync))
			var uri;
			var sizeKB=JSON.stringify($scope.tabDataSync).length/1000;
			document.querySelector('#jsontext').value=JSON.stringify($scope.tabDataSync);
			if ($scope.orgunitFactory!=undefined) {
				 uri=encodeURI('/api/datasyncsave/'+$scope.orgunitFactory+'/'+JSON.stringify($scope.tabDataSync));
					document.querySelector('#jsontext').value=JSON.stringify($scope.tabDataSync);
					document.querySelector('#keyname').value=$scope.orgunitFactory;
					document.querySelector('#datasize').value=sizeKB;
					document.querySelector('#monthsend').value=$scope.indexMonth;
			}else {
				 	document.querySelector('#jsontext').value=JSON.stringify($scope.tabDataSync);
					document.querySelector('#keyname').value=$scope.orgunitSelected.keyname;
					document.querySelector('#datasize').value=sizeKB;
					document.querySelector('#monthsend').value=$scope.indexMonth;
			}
			document.querySelector('#btnsender').click();
			
				
		}
	}
});
var dialogView = document.querySelector('#viewOrgunit');
function viewClick(e){
	var dialogView = document.querySelector('#viewOrgunit');
	if (!dialogView.showModal) {
	      dialogPolyfill.registerDialog(dialogView);
	 }
	var headerOrgunit=document.querySelector('#headerModal');
	headerOrgunit.innerHTML=e.typefilename+'<br/><span style=font-size:20px;><i>'+'4566 datas'+'</i></span>';
	var divMap=document.querySelector('#map');
		divMap.innerHTML=e.embedcard;
	
	 dialogView.showModal();
	// console.log(e);
}
function editClick(e){
	
	
	console.log(e.id)
}
function closeView(){
	dialogView.close();
}

