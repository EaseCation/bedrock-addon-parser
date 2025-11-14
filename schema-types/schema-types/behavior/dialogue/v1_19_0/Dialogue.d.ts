/**
 * behavior/dialogue/dialogue.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.970Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * The different scenes.
 *
 * @minItems 1
 */
export type Scenes = [Scene, ...Scene[]];
/**
 * This is where you can create buttons for your NPC.
 *
 * @maxItems 6
 */
export type Buttons =
  | []
  | [Button]
  | [Button, Button]
  | [Button, Button, Button]
  | [Button, Button, Button, Button]
  | [Button, Button, Button, Button, Button]
  | [Button, Button, Button, Button, Button, Button];
/**
 * Set the text that is going to be displayed on your NPC’s button.
 */
export type Name = string | RawText;
/**
 * Specifies for the translator that additional text component needs to be inserted, this will cause the translator to look for variables in the translation text and replaced them with the corresponding 'With' text component.
 */
export type With = (string | Rawtext1)[];
/**
 * The raw text component, which consists of an array of text components.
 */
export type Rawtext = (string | Translate | Text | Selector | Score)[];
/**
 * allows you to add commands which will be run in-game when the button is pressed.
 */
export type Commands = string[];
/**
 * This is where you can add or change a name for your NPC dialogue box. This is an optional property that is useful for dynamically changing NPC names.
 */
export type NPCName = string | RawText;
/**
 * This is where you can define which commands will fire when the NPC dialogue box closes.
 */
export type OnCloseCommands = string[];
/**
 * This is where you can define which commands will fire when the NPC dialogue box opens.
 */
export type OnCloseCommands1 = string[];
/**
 * This is where you enter the dialogue you want your NPC to display in-game for this scene. You can type the dialogue text directly here or use raw text if you are using a language file. This is an optional property, but without it your NPC dialogue box will be empty.
 */
export type Text1 = string | RawText;

/**
 * Specifies the dialogue scenes.
 */
export interface NPCDialogue {
  format_version: FormatVersion;
  'minecraft:npc_dialogue': NPCDialogue1;
}
/**
 * Specifies the dialogue of an npc.
 */
export interface NPCDialogue1 {
  scenes?: Scenes;
}
/**
 * A single scene specification.
 */
export interface Scene {
  buttons?: Buttons;
  npc_name?: NPCName;
  on_close_commands?: OnCloseCommands;
  on_open_commands?: OnCloseCommands1;
  /**
   * This is the name you will use to call this scene in-game. This is a required property.
   */
  scene_tag: string;
  text?: Text1;
}
/**
 * This is where you can create buttons for your NPC.
 */
export interface Button {
  name?: Name;
  commands?: Commands;
}
/**
 * A json structure that allows for translations, or go from scores and selectors to text.
 */
export interface RawText {
  rawtext: Rawtext;
}
/**
 * A text component that will attempt to translate the given key through the languages files.
 */
export interface Translate {
  /**
   * The key to translate.
   */
  translate: string;
  with?: With;
}
/**
 * Specifies that this 'with' component needs to be processed.
 */
export interface Rawtext1 {
  rawtext?: Rawtext;
}
/**
 * A simple text component, will display the text raw (without processing).
 */
export interface Text {
  /**
   * The text to display.
   */
  text: string;
}
/**
 * A text component that turns a selector into text, will usually display like: `Player1, Player2 and Player3`.
 */
export interface Selector {
  /**
   * The selector to target, for dialogue files, you can use @initiator.
   */
  selector: string;
}
/**
 * A text component that grabs the score from an given target and turns its value of a specified score.
 */
export interface Score {
  score: Score1;
}
/**
 * The score text component.
 */
export interface Score1 {
  /**
   * A selector, player name (can be fake), or * to target who is reading the message.
   */
  name: string;
  /**
   * The scoreboard objective to retrieve the value of.
   */
  objective: string;
}
