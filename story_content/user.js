function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6QJFf3j1NAR":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer()

// General Varaibles
player.SetVar("Language","English"); //Arabic or English
player.SetVar("Num_Qestions","5");

// Question 1
player.SetVar("Q_1","5+5");
player.SetVar("Q_1_Option_1", "1");
player.SetVar("Q_1_Option_2", "2");
player.SetVar("Q_1_Option_3", "3");
player.SetVar("Q_1_Option_N4", "10");
player.SetVar("Q_1_Option_5", "4");

// Question 2
player.SetVar("Q_2","###");
player.SetVar("Q_2_Option_1", "###");
player.SetVar("Q_2_Option_N2", "###");
player.SetVar("Q_2_Option_3", "###");
player.SetVar("Q_2_Option_4", "###");
player.SetVar("Q_2_Option_5", "###");

// Question 3
player.SetVar("Q_3","###");
player.SetVar("Q_3_Option_1", "###");
player.SetVar("Q_3_Option_2", "###");
player.SetVar("Q_3_Option_N3", "###");
player.SetVar("Q_3_Option_4", "###");
player.SetVar("Q_3_Option_5", "###");

// Question 4
player.SetVar("QN_4","###");
player.SetVar("Q_4_Option_1", "###");
player.SetVar("Q_4_Option_2", "###");
player.SetVar("Q_4_Option_3", "###");
player.SetVar("Q_4_Option_4", "###");
player.SetVar("Q_4_Option_N5", "###");

// Question 5
player.SetVar("Q_5","###");
player.SetVar("Q_5_Option_N1", "###");
player.SetVar("Q_5_Option_2", "###");
player.SetVar("Q_5_Option_3", "###");
player.SetVar("Q_5_Option_4", "###");
player.SetVar("Q_5_Option_5", "###");

// Question 6
player.SetVar("Q_6","###");
player.SetVar("Q_6_Option_1", "###");
player.SetVar("Q_6_Option_2", "###");
player.SetVar("Q_6_Option_3", "###");
player.SetVar("Q_6_Option_4", "###");
player.SetVar("Q_6_Option_N5", "###");

// Question 7
player.SetVar("Q_7","###");
player.SetVar("Q_7_Option_1", "###");
player.SetVar("Q_7_Option_2", "###");
player.SetVar("Q_7_Option_3", "###");
player.SetVar("Q_7_Option_N4", "###");
player.SetVar("Q_7_Option_5", "###");

// Question 8
player.SetVar("QN_8","###");
player.SetVar("Q_8_Option_1", "###");
player.SetVar("Q_8_Option_2", "###");
player.SetVar("Q_8_Option_3", "###");
player.SetVar("Q_8_Option_4", "###");
player.SetVar("Q_8_Option_N5", "###");

// Question 9
player.SetVar("Q_9","###");
player.SetVar("Q_9_Option_1", "###");
player.SetVar("Q_9_Option_N2", "###");
player.SetVar("Q_9_Option_3", "###");
player.SetVar("Q_9_Option_4", "###");
player.SetVar("Q_9_Option_5", "###");

// Question 10
player.SetVar("Q_10","###");
player.SetVar("Q_10_Option_1", "###");
player.SetVar("Q_10_Option_2", "###");
player.SetVar("Q_10_Option_3", "###");
player.SetVar("Q_10_Option_N4", "###");
player.SetVar("Q_10_Option_5", "###");
}

};
