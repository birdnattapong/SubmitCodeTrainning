using System;
using System.Collections.Generic;
using System.Text;

namespace XOgame
{
    class Player
    {
        private String playerName;
        private String mark;

        public Player(String name, String mark)
        {
            this.playerName = name;
            this.mark = mark;
        }

        public string PlayerName { get => playerName; set => playerName = value; }
        public string Mark { get => mark; set => mark = value; }
    }
}
