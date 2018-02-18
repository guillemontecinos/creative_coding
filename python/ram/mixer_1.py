#this algorith was developed for Nick Montfort's class at SFPC
#Guillermo Montecinos
#Oct, 2017

from random import choice

#sentence1 = ['she looked', 'at me with her dark eyes', 'and said i like you']
#sentence2 = ['she looked', 'into my eyes', 'and said me too']
#sentence3 = ['nobody', 'kissed me', 'like she does']
#sentence4 = ['I have never', 'felt', 'like this before']

partA = ['she looked', 'nobody','I have never']
partB = ['at me with her dark eyes','into my eyes','kissed me','felt']
partC = ['and said i like you','and said me too','like she does','like this before']

#mixing each sentence with itself
#for i in range(5):
#    print choice(sentence) + " / " + choice(sentence) + " / " + choice(sentence) + "\n"

#Mixing two sentences
for i in range(5):
    #print choice([sentence1[0],sentence3[0]]) + " / " + choice([sentence1[1],sentence3[1]]) + " / " + choice([sentence1[2],sentence3[2]])
    #print choice([sentence2[0],sentence4[0]]) + " / " + choice([sentence2[1],sentence4[1]]) + " / " + choice([sentence2[2],sentence4[2]])
    print choice(partA) + " / " + choice(partB) + " / " + choice(partC)
