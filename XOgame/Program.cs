using System;

namespace XOgame
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("======== XO Game ========");
            Console.Write("Enter name of player 1 : ");
            String playerName1 = Console.ReadLine();
            Console.Write("Enter name of player 2 : ");
            String playerName2 = Console.ReadLine();

            Player player1 = new Player(playerName1, "X");
            Player player2 = new Player(playerName2, "O");
            Game xogame = new Game(player1, player2);
            xogame.playGame();
        }
    }
}
