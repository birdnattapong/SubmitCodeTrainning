using System;

namespace Homework05
{
	class Program
	{
		static void Main(string[] args)
		{
			GroupOfLed grp1 = new GroupOfLed();
			do
			{
				for (int i = 0; i < grp1.leds.Length; i++)
				{
					String ShowStatus = null;

					if (grp1.leds[i].getStatus() == "false")
					{
						ShowStatus = " ";
					}
					else if (grp1.leds[i].getStatus() == "true")
					{
						ShowStatus = "!";
					}

					Console.Write("[" + ShowStatus + "]");
					Console.Write(" ");
				}

				Console.WriteLine();
				Console.Write(" 1   2   3   4   5   6   7   8   9   A");
				Console.WriteLine("");
				Console.Write("Please choose LED to turn On/Off : ");
				String ledNo = Console.ReadLine();

				if (ledNo == "A")
				{
					ledNo = "10";
				}

				int number;
				Int32.TryParse(ledNo, out number);
				grp1.DisplayLEDOnScreen(number - 1);
			} while (true);
		}
	}
}
