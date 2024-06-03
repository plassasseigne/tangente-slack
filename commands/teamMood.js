module.exports = (app) => {
  let votes = {};
  let commentaries = [];
  let resultMessageTs = null;
  let commentariesBlock = null;
  let date = null;
  const channel = "C0770PNQHR6";

  app.command('/teammood', async ({ ack, say }) => {
    await ack();

    try {
      date = new Date().toLocaleDateString();

      const resultMessage = await say({
        text: "Message des résultats",
        blocks: [
          {
            "type": "header",
            "text": {
              "type": "plain_text",
              "text": `Team Mood du ${date}`,
              "emoji": true,
            },
          },
          {
            "type": "divider",
          },
          {
            "type": "rich_text",
            "elements": [
              {
                "type": "rich_text_section",
                "elements": [
                  {
                    "type": "text",
                    "text": "Satisfaction globale : \n",
                    "style": {
                      "bold": true
                    }
                  }
                ]
              },
              {
                "type": "rich_text_list",
                "style": "bullet",
                "elements": [
                  {
                    "type": "rich_text_section",
                    "elements": [
                      {
                        "type": "text",
                        "text": "Excellente journée ",
                      },
                      {
                        "type": "emoji",
                        "name": "star-struck",
                        "unicode": "1f929",
                      },
                      {
                        "type": "text",
                        "text": " : ",
                      },
                      {
                        "type": "text",
                        "text": "0",
                        "style": {
                          "bold": true,
                        },
                      },
                    ],
                  },
                  {
                    "type": "rich_text_section",
                    "elements": [
                      {
                        "type": "text",
                        "text": "Bonne journée ",
                      },
                      {
                        "type": "emoji",
                        "name": "grinning",
                        "unicode": "1f600",
                      },
                      {
                        "type": "text",
                        "text": " : ",
                      },
                      {
                        "type": "text",
                        "text": "0",
                        "style": {
                          "bold": true,
                        },
                      },
                    ],
                  },
                  {
                    "type": "rich_text_section",
                    "elements": [
                      {
                        "type": "text",
                        "text": "Journée neutre / normale ",
                      },
                      {
                        "type": "emoji",
                        "name": "neutral_face",
                        "unicode": "1f610",
                      },
                      {
                        "type": "text",
                        "text": " : ",
                      },
                      {
                        "type": "text",
                        "text": "0",
                        "style": {
                          "bold": true,
                        },
                      },
                    ],
                  },
                  {
                    "type": "rich_text_section",
                    "elements": [
                      {
                        "type": "text",
                        "text": "Journée difficile ",
                      },
                      {
                        "type": "emoji",
                        "name": "sweat",
                        "unicode": "1f613",
                      },
                      {
                        "type": "text",
                        "text": " : ",
                      },
                      {
                        "type": "text",
                        "text": "0",
                        "style": {
                          "bold": true,
                        },
                      },
                    ],
                  },
                  {
                    "type": "rich_text_section",
                    "elements": [
                      {
                        "type": "text",
                        "text": "Journée éclatée au sol ",
                      },
                      {
                        "type": "emoji",
                        "name": "melting_face",
                        "unicode": "1fae0",
                      },
                      {
                        "type": "text",
                        "text": " : ",
                      },
                      {
                        "type": "text",
                        "text": "0",
                        "style": {
                          "bold": true,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            "type": "divider"
          },
          {
            "type": "rich_text",
            "elements": [
              {
                "type": "rich_text_section",
                "elements": [
                  {
                    "type": "text",
                    "text": "Commentaires :",
                    "style": {
                      "bold": true
                    }
                  },
                  {
                    "type": "text",
                    "text": "\nAucun commentaire pour le moment"
                  }
                ]
              }
            ]
          },
          {
            "type": "divider"
          },
          {
            "type": "context",
            "elements": [
              {
                "type": "plain_text",
                "text": "Total de votes : 0",
                "emoji": true,
              },
            ],
          },
        ],
      });
      await say({
        text: "Message du formulaire de vote",
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "Comment s'est passée ta journée ?",
            },
          },
          {
            type: "actions",
            elements: [
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "Remplir le formulaire",
                },
                action_id: "open_modal",
              },
            ],
          },
        ],
      });

      resultMessageTs = resultMessage.ts;
    } catch (error) {
      console.log(error);
    }
  });

  app.action('open_modal', async({ ack, body, client }) => {
    await ack();

    let initialValue = null;

    commentaries.forEach((item) => {
      if (item.user === body.user.id) {
        initialValue = item.commentary;
      }
    });

    try {
      await client.views.open({
        trigger_id: body.trigger_id,
        view: {
          "type": "modal",
          "callback_id": "submit_teammood",
          "submit": {
            "type": "plain_text",
            "text": "Submit",
            "emoji": true
          },
          "close": {
            "type": "plain_text",
            "text": "Cancel",
            "emoji": true
          },
          "title": {
            "type": "plain_text",
            "text": "Team Mood 🤔",
            "emoji": true
          },
          "blocks": [
            {
              "type": "input",
              "block_id": "feedback",
              "label": {
                "type": "plain_text",
                "text": "Comment s'est passée ta journée ?",
                "emoji": true
              },
              "element": {
                "type": "radio_buttons",
                "action_id": "feedback_content",
                "options": [
                  {
                    "text": {
                      "type": "plain_text",
                      "text": "Excellente journée 🤩",
                      "emoji": true
                    },
                    "value": "excellent"
                  },
                  {
                    "text": {
                      "type": "plain_text",
                      "text": "Bonne journée 😀",
                      "emoji": true
                    },
                    "value": "good"
                  },
                  {
                    "text": {
                      "type": "plain_text",
                      "text": "Journée neutre / normale 😐",
                      "emoji": true
                    },
                    "value": "normal"
                  },
                  {
                    "text": {
                      "type": "plain_text",
                      "text": "Journée difficile 😓",
                      "emoji": true
                    },
                    "value": "hard"
                  },
                  {
                    "text": {
                      "type": "plain_text",
                      "text": "Journée éclatée au sol 🫠",
                      "emoji": true
                    },
                    "value": "bad"
                  }
                ]
              }
            },
            {
              "type": "input",
              "block_id": "commentary",
              "label": {
                "type": "plain_text",
                "text": "As-tu un commentaire à ajouter ?",
                "emoji": true
              },
              "element": {
                "type": "plain_text_input",
                "action_id": "commentary_content",
                "multiline": true,
                "initial_value": initialValue !== null ? initialValue : ''
              },
              "optional": true
            }
          ]
        }
      });
    } catch (error) {
      console.log(error);
    }
  });

  app.view('submit_teammood', async({ ack, body, view, client }) => {
    const user = body.user.id;
    const feedback = view.state.values.feedback.feedback_content.selected_option.value;
    const feedbackText = view.state.values.feedback.feedback_content.selected_option.text.text;
    const commentary = view.state.values.commentary.commentary_content.value;

    let feedbackLength = 0;
    let excellentFeedback = 0;
    let goodFeedback = 0;
    let normalFeedback = 0;
    let hardFeedback = 0;
    let badFeedback = 0;

    await ack();

    try {
      if (!votes[user]) {
        votes[user] = feedback;
        commentaries.push({
          user: user, commentary: commentary
        });
        
        feedbackLength = Object.values(votes).length;
        excellentFeedback = Object.values(votes).filter(vote => vote === 'excellent').length;
        goodFeedback = Object.values(votes).filter(vote => vote === 'good').length;
        normalFeedback = Object.values(votes).filter(vote => vote === 'normal').length;
        hardFeedback = Object.values(votes).filter(vote => vote === 'hard').length;
        badFeedback = Object.values(votes).filter(vote => vote === 'bad').length;

        if (commentaries.length === 0) {
          commentariesBlock = {
            "type": "rich_text_section",
            "elements": [
              {
                "type": "text",
                "text": "Pas de commentaire pour le moment"
              }
            ]
          }
        } else {
          commentariesBlock = commentaries.map(item => (
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": `${item.commentary}`
                }
              ]
            }
          ));
        }

        await client.chat.postEphemeral({
          channel,
          user,
          text: `<@${user}> tu as voté pour "${feedbackText}" !`
        });

        await client.chat.update({
          channel,
          ts: resultMessageTs,
          text: "Message des résultats",
          blocks: [
            {
              "type": "header",
              "text": {
                "type": "plain_text",
                "text": `Team Mood du ${date}`,
                "emoji": true,
              },
            },
            {
              "type": "divider",
            },
            {
              "type": "rich_text",
              "elements": [
                {
                  "type": "rich_text_section",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Satisfaction globale : \n",
                      "style": {
                        "bold": true
                      }
                    }
                  ]
                },
                {
                  "type": "rich_text_list",
                  "style": "bullet",
                  "elements": [
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Excellente journée ",
                        },
                        {
                          "type": "emoji",
                          "name": "star-struck",
                          "unicode": "1f929",
                        },
                        {
                          "type": "text",
                          "text": " : ",
                        },
                        {
                          "type": "text",
                          "text": `${excellentFeedback}`,
                          "style": {
                            "bold": true,
                          },
                        },
                      ],
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Bonne journée ",
                        },
                        {
                          "type": "emoji",
                          "name": "grinning",
                          "unicode": "1f600",
                        },
                        {
                          "type": "text",
                          "text": " : ",
                        },
                        {
                          "type": "text",
                          "text": `${goodFeedback}`,
                          "style": {
                            "bold": true,
                          },
                        },
                      ],
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Journée neutre / normale ",
                        },
                        {
                          "type": "emoji",
                          "name": "neutral_face",
                          "unicode": "1f610",
                        },
                        {
                          "type": "text",
                          "text": " : ",
                        },
                        {
                          "type": "text",
                          "text": `${normalFeedback}`,
                          "style": {
                            "bold": true,
                          },
                        },
                      ],
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Journée difficile ",
                        },
                        {
                          "type": "emoji",
                          "name": "sweat",
                          "unicode": "1f613",
                        },
                        {
                          "type": "text",
                          "text": " : ",
                        },
                        {
                          "type": "text",
                          "text": `${hardFeedback}`,
                          "style": {
                            "bold": true,
                          },
                        },
                      ],
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Journée éclatée au sol ",
                        },
                        {
                          "type": "emoji",
                          "name": "melting_face",
                          "unicode": "1fae0",
                        },
                        {
                          "type": "text",
                          "text": " : ",
                        },
                        {
                          "type": "text",
                          "text": `${badFeedback}`,
                          "style": {
                            "bold": true,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              "type": "divider"
            },
            {
              "type": "rich_text",
              "elements": [
                {
                  "type": "rich_text_section",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Commentaires :",
                      "style": {
                        "bold": true
                      }
                    },
                    {
                      "type": "text",
                      "text": "\n"
                    }
                  ]
                },
                {
                  "type": "rich_text_list",
                  "style": "bullet",
                  "indent": 0,
                  "border": 0,
                  "elements": [
                    ...commentariesBlock
                  ]
                }
              ]
            },
            {
              "type": "divider"
            },
            {
              "type": "context",
              "elements": [
                {
                  "type": "plain_text",
                  "text": `Total de votes : ${feedbackLength}`,
                  "emoji": true,
                },
              ],
            },
          ],
        });
      } else {
        delete votes[user];
        for (let i = 0; i < commentaries.length; i++) {
          if (commentaries[i].user === user) {
            commentaries.splice(i, 1);
          }
        }

        console.log(commentaries);

        votes[user] = feedback;
        commentaries.push({
          user: user, commentary: commentary
        });

        feedbackLength = Object.values(votes).length;
        excellentFeedback = Object.values(votes).filter(vote => vote === 'excellent').length;
        goodFeedback = Object.values(votes).filter(vote => vote === 'good').length;
        normalFeedback = Object.values(votes).filter(vote => vote === 'normal').length;
        hardFeedback = Object.values(votes).filter(vote => vote === 'hard').length;
        badFeedback = Object.values(votes).filter(vote => vote === 'bad').length;

        if (commentaries.length === 0) {
          commentariesBlock = {
            "type": "rich_text_section",
            "elements": [
              {
                "type": "text",
                "text": "Pas de commentaire pour le moment"
              }
            ]
          }
        } else {
          commentariesBlock = commentaries.map(item => (
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": `${item.commentary}`
                }
              ]
            }
          ));
        }
  
        await client.chat.postEphemeral({
          channel,
          user,
          text: `<@${user}> tu as changé ton vote pour "${feedbackText}" !`
        });
  
        await client.chat.update({
          channel,
          ts: resultMessageTs,
          text: "Message des résultats",
          blocks: [
            {
              "type": "header",
              "text": {
                "type": "plain_text",
                "text": `Team Mood du ${date}`,
                "emoji": true,
              },
            },
            {
              "type": "divider",
            },
            {
              "type": "rich_text",
              "elements": [
                {
                  "type": "rich_text_section",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Satisfaction globale : \n",
                      "style": {
                        "bold": true
                      }
                    }
                  ]
                },
                {
                  "type": "rich_text_list",
                  "style": "bullet",
                  "elements": [
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Excellente journée ",
                        },
                        {
                          "type": "emoji",
                          "name": "star-struck",
                          "unicode": "1f929",
                        },
                        {
                          "type": "text",
                          "text": " : ",
                        },
                        {
                          "type": "text",
                          "text": `${excellentFeedback}`,
                          "style": {
                            "bold": true,
                          },
                        },
                      ],
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Bonne journée ",
                        },
                        {
                          "type": "emoji",
                          "name": "grinning",
                          "unicode": "1f600",
                        },
                        {
                          "type": "text",
                          "text": " : ",
                        },
                        {
                          "type": "text",
                          "text": `${goodFeedback}`,
                          "style": {
                            "bold": true,
                          },
                        },
                      ],
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Journée neutre / normale ",
                        },
                        {
                          "type": "emoji",
                          "name": "neutral_face",
                          "unicode": "1f610",
                        },
                        {
                          "type": "text",
                          "text": " : ",
                        },
                        {
                          "type": "text",
                          "text": `${normalFeedback}`,
                          "style": {
                            "bold": true,
                          },
                        },
                      ],
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Journée difficile ",
                        },
                        {
                          "type": "emoji",
                          "name": "sweat",
                          "unicode": "1f613",
                        },
                        {
                          "type": "text",
                          "text": " : ",
                        },
                        {
                          "type": "text",
                          "text": `${hardFeedback}`,
                          "style": {
                            "bold": true,
                          },
                        },
                      ],
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Journée éclatée au sol ",
                        },
                        {
                          "type": "emoji",
                          "name": "melting_face",
                          "unicode": "1fae0",
                        },
                        {
                          "type": "text",
                          "text": " : ",
                        },
                        {
                          "type": "text",
                          "text": `${badFeedback}`,
                          "style": {
                            "bold": true,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              "type": "divider"
            },
            {
              "type": "rich_text",
              "elements": [
                {
                  "type": "rich_text_section",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Commentaires :",
                      "style": {
                        "bold": true
                      }
                    },
                    {
                      "type": "text",
                      "text": "\n"
                    }
                  ]
                },
                {
                  "type": "rich_text_list",
                  "style": "bullet",
                  "indent": 0,
                  "border": 0,
                  "elements": [
                    ...commentariesBlock
                  ]
                }
              ]
            },
            {
              "type": "divider"
            },
            {
              "type": "context",
              "elements": [
                {
                  "type": "plain_text",
                  "text": `Total de votes : ${feedbackLength}`,
                  "emoji": true,
                },
              ],
            },
          ],
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
}