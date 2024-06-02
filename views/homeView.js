module.exports = (app) => {
  app.event('app_home_opened', async ({ event, client }) => {
    try {
      await client.views.publish({
        user_id: event.user,
        view: {
          type: "home",
          blocks: [
            {
              "type": "image",
              "image_url": "https://media.discordapp.net/attachments/1047260461416054914/1246122702188839043/bot-background.png?ex=665de0b4&is=665c8f34&hm=85791627d7fefb878e4bfcc51ff817fbdc01d57800e1b50790254d2c820b79f6&=&format=webp&quality=lossless&width=1440&height=422",
              "alt_text": "Digital Cover banner"
            },
            {
              "type": "header",
              "text": {
                "type": "plain_text",
                "text": "Bienvenue sur le Slack de Digital Cover 👋",
                "emoji": true
              }
            },
            {
              "type": "section",
              "text": {
                "type": "mrkdwn",
                "text": "*Présentation de l'équipe 🛡️*"
              }
            },
            {
              "type": "section",
              "text": {
                "type": "mrkdwn",
                "text": "Hello <@" + event.user + ">, nous sommes actuellement *14* dans l'équipe !"
              }
            },
            {
              "type": "divider"
            },
            // Direction
            {
              "type": "rich_text",
              "elements": [
                {
                  "type": "rich_text_quote",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Direction ",
                      "style": {
                        "bold": true
                      }
                    },
                    {
                      "type": "emoji",
                      "name": "sushi",
                      "unicode": "1f363"
                    }
                  ]
                }
              ]
            },
            {
              "type": "rich_text",
              "elements": [
                {
                  "type": "rich_text_list",
                  "style": "bullet",
                  "elements": [
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "link",
                          "url": "mailto:a.challon@digital-cover.com",
                          "text": "Arnaud Challon"
                        },
                        {
                          "type": "text",
                          "text": " - "
                        },
                        {
                          "type": "text",
                          "text": "CEO",
                          "style": {
                            "italic": true
                          }
                        }
                      ]
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Tatiana Arnotti - "
                        },
                        {
                          "type": "text",
                          "text": "RH",
                          "style": {
                            "italic": true
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "divider"
            },
            // Pôle Développement web
            {
              "type": "rich_text",
              "elements": [
                {
                  "type": "rich_text_quote",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Pôle Développement web ",
                      "style": {
                        "bold": true
                      }
                    },
                    {
                      "type": "emoji",
                      "name": "computer",
                      "unicode": "1f4bb"
                    }
                  ]
                }
              ]
            },
            {
              "type": "rich_text",
              "elements": [
                {
                  "type": "rich_text_list",
                  "style": "bullet",
                  "elements": [
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Léa Machy"
                        }
                      ]
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Pierre Eveno"
                        }
                      ]
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Antoine Delcourte"
                        }
                      ]
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Ali Agbani"
                        }
                      ]
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Paul Lassasseigne - "
                        },
                        {
                          "type": "text",
                          "text": "alternant",
                          "style": {
                            "italic": true
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "divider"
            },
            // Pôle Design
            {
              "type": "rich_text",
              "elements": [
                {
                  "type": "rich_text_quote",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Pôle Design ",
                      "style": {
                        "bold": true
                      }
                    },
                    {
                      "type": "emoji",
                      "name": "art",
                      "unicode": "1f3a8"
                    }
                  ]
                }
              ]
            },
            {
              "type": "rich_text",
              "elements": [
                {
                  "type": "rich_text_list",
                  "style": "bullet",
                  "elements": [
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Alexandra Coeurt"
                        }
                      ]
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Nathan Soares"
                        }
                      ]
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Simon Damour - "
                        },
                        {
                          "type": "text",
                          "text": "alternant",
                          "style": {
                            "italic": true
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "divider"
            },
            // Pôle Gestion de Projet
            {
              "type": "rich_text",
              "elements": [
                {
                  "type": "rich_text_quote",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Pôle Gestion de Projet",
                      "style": {
                        "bold": true
                      }
                    },
                    {
                      "type": "text",
                      "text": " "
                    },
                    {
                      "type": "emoji",
                      "name": "index_pointing_at_the_viewer",
                      "unicode": "1faf5"
                    }
                  ]
                }
              ]
            },
            {
              "type": "rich_text",
              "elements": [
                {
                  "type": "rich_text_list",
                  "style": "bullet",
                  "elements": [
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Cléo Brun Morel"
                        }
                      ]
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Valentin Valero"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "divider"
            },
            // Pôles SEO & SEA
            {
              "type": "rich_text",
              "elements": [
                {
                  "type": "rich_text_quote",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Pôles SEO & SEA ",
                      "style": {
                        "bold": true
                      }
                    },
                    {
                      "type": "emoji",
                      "name": "mag",
                      "unicode": "1f50d"
                    }
                  ]
                }
              ]
            },
            {
              "type": "rich_text",
              "elements": [
                {
                  "type": "rich_text_list",
                  "style": "bullet",
                  "elements": [
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Marie Gaches - "
                        },
                        {
                          "type": "text",
                          "text": "SEO",
                          "style": {
                            "italic": true
                          }
                        }
                      ]
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Perrine Planchenault - "
                        },
                        {
                          "type": "text",
                          "text": "alternante SEO",
                          "style": {
                            "italic": true
                          }
                        }
                      ]
                    },
                    {
                      "type": "rich_text_section",
                      "elements": [
                        {
                          "type": "text",
                          "text": "Anass Fakir - "
                        },
                        {
                          "type": "text",
                          "text": "SEA",
                          "style": {
                            "italic": true
                          }
                        }
                      ]
                    },
                  ]
                }
              ]
            },
            {
              "type": "divider"
            }
          ],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });
};
