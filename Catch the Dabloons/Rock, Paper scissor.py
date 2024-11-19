import random

def play_game():

    choices = ["rock", "paper", "scissors"]


    def get_computer_choice():
        return random.choice(choices)

    def get_user_choice():
        user_choice = input("Enter your choice rock, paper, scissors: ").lower()
        if user_choice in choices:
            return user_choice
        else:
            print("Invalid choice. Please choose rock, paper, or scissors.")
            return get_user_choice()


    def determine_winner(user_choice, computer_choice):
        if user_choice == computer_choice:
            return "It's a tie!"
        elif (user_choice == "rock" and computer_choice == "scissors") or \
             (user_choice == "paper" and computer_choice == "rock") or \
             (user_choice == "scissors" and computer_choice == "paper"):
            return "You win!"
        else:
            return "Computer wins!"

    while True:
        user_choice = get_user_choice()
        computer_choice = get_computer_choice()

        play
        





















































        