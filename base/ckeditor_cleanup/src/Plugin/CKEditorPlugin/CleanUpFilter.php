<?php

namespace Drupal\ckeditor_cleanup\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\filter\FilterProcessResult;
use Drupal\filter\Plugin\FilterBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Defines the "CleanUp" plugin.
 *
 * @CKEditorPlugin(
 *   id = "cleanup",
 *   label = @Translation("CleanUp")
 * )
 */
class CleanUpFilter extends FilterBase {

  /**
   * {@inheritdoc}
   */
  public function getFile() {
   //return 'libraries/ckeditor/plugins/pastefromword/plugin.js';
  }

  public function process($text, $langcode) {
    $text = preg_replace('#(<span.*?>)(.*?)(</span>)#', '$2', $text);
    $text = preg_replace('#(<font.*?>)(.*?)(</font>)#', '$2', $text);
    $text = preg_replace('\font-family.+?;/', '', $text);
    $text = preg_replace('\font-size.+?;/', '', $text);
    $text = preg_replace('\color.+?;/', '', $text);
    return new FilterProcessResult($text);
  }

  public function settingsForm(array $form, FormStateInterface $form_state) {
    $form['cleanup_setting'] = array(
      '#type' => 'checkbox',
      '#title' => $this->t('CleanUp Text'),
      '#default_value' => $this->settings['cleanup_setting'],
      '#description' => $this->t('CleanUp Text by insert.'),
    );
    return $form;
  }

}
