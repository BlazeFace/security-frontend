<script setup lang='ts'>
  import QuizQuestion from '../components/QuizQuestion.vue'
  import DeviceGrid from '../components/DeviceGrid.vue'
</script>

<template>
  <div class="lg:px-8 h-auto">
    <br/>
    <DeviceGrid></DeviceGrid>
    <br/>
    <div class="py-2" v-for="question in questions" :question=question>
        <QuizQuestion 
            v-bind:question="question.title"
            v-bind:description="question.desc"></QuizQuestion>
    </div>
  </div>
  
</template>

<style scoped>
.question-content h2 {
    font-size: 20px;
}
</style>

<script lang="ts">

/* sample question data */

var questions = [{
        'title': 'Are you well versed in personal digital security?',
        'desc': "If you are not well versed in personal digital security, it would help to become more aware of certain strategies to protect yourself. These include things such as understanding how to use anti-virus protection, firewalls, multi-factor identification, the characteristics of a strong password, and even to just be aware of the phishing scams"
    },
    {
        'title': 'Are you worried about protecting your data from your internet service provider?',
        'desc': "If you are concerned about your internet service provider stealing and selling your private data, there are a lot of technical measures that can be put into place in order to protect yourself from ISPs"
    },
    {
        'title': 'Are you worried about protecting your data from websites you visit?',
        'desc': "Protecting your data from websites you visit is an important aspect of personal internet security. You should spend time finding your browser's cookie settings and to limit as many cookies as possible"
    },
    {
        'title': 'Are you worried about your passwords or other sensitive information being hacked?',
        'desc': "If you are concerned about your sensitive information being compromised, change the passwords for any account that may have a compromised password. To dampen the impacts of compromised information, ensure that you are not reusing passwords for different accounts"
    },
    {
        'title': 'Are you worried about phishing scams?',
        'desc': "Phishing is a scam that reaches you in the form of a message, such as an email, from what appears to be a reliable source, such as your bank or a friend. The message will ask you for personal information and will use this information to gain access to your accounts"
    },
    {
        'title': 'Do you know how to set up a VPN?',
        'desc': "Setting up a VPN or Virtual Private Network helps to prevent your data from being seen from your internet service provider or ISP. An ISP can be any WIFI network that you are connected to. This includes your home network, Virginia Tech's eduroam, or the local coffee shop"
    },
    {
        'title': "Are you worried about protecting a device if it's lost or stolen?",
        'desc': "In order to protect your data from technology companies, you need to consistently use good digital security practices (Strong passwords, multi-factor authentication, etc..). However, you should adjust your privacy setting for your device, and applications on your device, to minimize the information of yours that is being collected"
    },
    {
        'title': 'Are you worried about protecting your data from technology companies?',
        'desc': ""
    },
    {
        'title': 'Are you worried about protection from stalking or harassment?',
        'desc': ""
    },
    {
        'title': 'Are you worried about information that is put onto your social media accounts?',
        'desc': ""
    },
]

</script>
