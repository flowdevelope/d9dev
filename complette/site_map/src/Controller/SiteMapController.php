<?php

namespace Drupal\site_map\Controller;

use Drupal\Core\Controller\ControllerBase;

class SiteMapController extends ControllerBase {
  public function content() {
    return array(
      '#theme' => 'paragraph--map',
    );
  }
}
