using System;

namespace Homework05
{
	class LED
	{
		private String status;

		public LED()
		{
			this.status = "false";
		}

		public String getStatus()
		{
			return this.status;
		}

		public void setStatus(String status)
		{
			this.status = status;
		}
	}
}
