using System;
using System.Collections.Generic;
using System.Text;

namespace Homework05
{
	class GroupOfLed : IHomework05
	{
		public LED[] leds = new LED[10];

		public GroupOfLed()
		{
			for (int i = 0; i < leds.Length; i++)
			{
				leds[i] = new LED();
			}
		}

		public void DisplayLEDOnScreen(int ledNo)
		{
			if (leds[ledNo].getStatus() == "true")
			{
				leds[ledNo].setStatus("false");
			}
			else
			{
				leds[ledNo].setStatus("true");
			}
		}
	}
}
