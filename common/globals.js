export const FAVORITE_STATION_SETTING = "favorite_station_setting";
export const TRAIN_COUNT = 20;

export const PROGRAM_COUNT = 11
export const PUSHUP_PROGRAM = [
	{
		"name": "Initial Test",
		"type": "maxout"
  	},
  	{
	  	"name": "Week 1 Day 1",
   		"type": "workout",
   		"data": {
			"0": [2, 3, 2, 2, 3],
			"5": [6, 6, 4, 4, 5],
			"10": [10, 12, 7, 7, 9]
		},
		"rest": 60
  	},
  	{
		"name": "Week 1 Day 2",
   		"type": "workout",
   		"data": {
			"0": [2, 3, 2, 2, 3],
			"5": [6, 6, 4, 4, 5],
			"10": [10, 12, 7, 7, 9]
		},
		"rest": 60
  	},
  	{
		"name": "Week 1 Day 3",
   		"type": "workout",
   		"data": {
			"0": [4, 5, 4, 4, 5],
			"5": [8, 10, 7, 7, 10],
			"10": [11, 15, 9, 9, 13]
		},
		"rest": 60
	},
  	{
		"name": "Week 2 Day 1",
   		"type": "workout",
   		"data": {
			"0": [4, 6, 4, 4, 6],
			"5": [9, 11, 8, 8, 11],
			"10": [14, 14, 10, 10, 15]
		},
		"rest": 60
	},
  	{
		"name": "Week 2 Day 2",
   		"type": "workout",
   		"data": {
			"0": [5, 6, 4, 4, 7],
			"5": [10, 12, 9, 9, 13],
			"10": [14, 16, 12, 12, 17]
		},
		"rest": 90
	},
  	{
		"name": "Week 2 Day 3",
   		"type": "workout",
   		"data": {
			"0": [5, 7, 5, 5, 8],
			"5": [12, 13, 10, 10, 15],
			"10": [16, 17, 14, 14, 20]
		},
		"rest": 120
	},
  	{
		"name": "Exhastion Test 1",
   		"type": "maxout"
  	},
  	{
		"name": "Week 3 Day 1",
   		"type": "workout",
   		"data": {
			"0": [10, 12, 7, 7, 9],
			"20": [12, 17, 13, 13, 17],
			"25": [14, 18, 14, 14, 20]
		},
		"rest": 60
	},
  	{
		"name": "Week 3 Day 2",
   		"type": "workout",
   		"data": {
			"0": [10, 12, 8, 8, 12],
			"20": [14, 19, 14, 14, 19],
			"25": [20, 25, 15, 15, 25]
		},
		"rest": 90
	},
  	{
		"name": "Week 3 Day 3",
   		"type": "workout",
   		"data": {
			"0": [11, 13, 9, 9, 13],
			"20": [16, 21, 15, 15, 21],
			"25": [22, 30, 20, 20, 28]
		},
		"rest": 120
	},
	{
		"name": "Week 4 Day 1",
   	    "type": "workout",
   	    "data": {
			"0": [12, 14, 11, 10, 16],
			"20": [18, 22, 16, 16, 25],
			"25": [21, 25, 21, 21, 32]
		},
		"rest": 60
	},
	{
		"name": "Week 4 Day 2",
   	    "type": "workout",
   	    "data": {
			"0": [14, 16, 12, 12, 18],
			"20": [20, 25, 20, 20, 28],
			"25": [25, 29, 25, 25, 36]
		},
		"rest": 90
	},
	{
		"name": "Week 4 Day 3",
   	    "type": "workout",
   	    "data": {
			"0": [16, 18, 13, 13, 20],
			"20": [23, 28, 23, 23, 33],
			"25": [29, 33, 29, 29, 40]
		},
		"rest": 120
	},
	{
		"name": "Exhastion Test 2",
   		"type": "maxout"
  	},
	{
		"name": "Week 5 Day 1",
   	    "type": "workout",
   	    "data": {
			"0": [17, 19, 15, 15, 20],
			"35": [28, 35, 25, 22, 35],
			"40": [36, 40, 30, 24, 40]
		},
		"rest": 60
	},
	{
		"name": "Week 5 Day 2",
   	    "type": "workout",
   	    "data": {
			"0": [10, 10, 13, 13, 13, 10, 10, 9, 25],
			"35": [18, 18, 20, 20, 14, 14, 16, 40],
			"40": [19, 19, 22, 22, 18, 18, 22, 45]
		},
		"rest": 45
	},
	{
		"name": "Week 5 Day 3",
   	    "type": "workout",
   	    "data": {
			"0": [13, 13, 15, 15, 12, 12, 10, 30],
			"35": [18, 18, 20, 20, 17, 17, 20, 45],
			"40": [20, 20, 24, 24, 20, 20, 22, 50]
		},
		"rest": 45
	},
	{
		"name": "Exhastion Test 3",
   		"type": "maxout"
  	},
	{
		"name": "Week 6 Day 1",
   	    "type": "workout",
   	    "data": {
			"0": [25, 30, 20, 15, 40],
			"50": [40, 50, 25, 25, 50],
			"60": [45, 55, 35, 30, 55]
		},
		"rest": 60
	},
	{
		"name": "Week 6 Day 2",
   	    "type": "workout",
   	    "data": {
			"0": [14, 14, 15, 15, 14, 14, 10, 10, 44],
			"50": [20, 20, 23, 23, 20, 20, 18, 18, 53],
			"60": [22, 22, 30, 30, 24, 24, 18, 18, 58]
		},
		"rest": 45
	},
	{
		"name": "Week 6 Day 3",
   	    "type": "workout",
   	    "data": {
			"0": [13, 13, 17, 17, 16, 16, 14, 14, 50],
			"50": [22, 22, 30, 30, 25, 25, 18, 18, 55],
			"60": [26, 26, 33, 33, 26, 26, 22, 22, 60]
		},
		"rest": 45
	},
];


export const INITIAL_MAX_TEST_INSTRUCTIONS = "Complete as many pushups as you can.\n\nThis will tailor the program."
export const RESET_MAX_INSTRUCTIONS = "Reset your maximum pushups.\n\nThis will tailor the program."
export const MAX_OUT_INSTRUCTIONS = "Max out time!\n\nHow many pushups can you do?"