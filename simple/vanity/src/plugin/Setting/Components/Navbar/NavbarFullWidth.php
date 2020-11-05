<?php
/**
 * @file
 * Contains \Drupal\vanity\Plugin\Setting\Components\Navbar\NavbarFullWidth.
 */

namespace Drupal\vanity\Plugin\Setting\Components\Navbar;

use Drupal\bootstrap\Annotation\BootstrapSetting;
use Drupal\bootstrap\Plugin\Setting\SettingBase;
use Drupal\Core\Annotation\Translation;

/**
 * The "navbar_full_width" theme setting.
 *
 * @ingroup plugins_setting
 *
 * @BootstrapSetting(
 *   id = "navbar_full_width",
 *   type = "checkbox",
 *   title = @Translation("Full width navbar submenu style"),
 *   description = @Translation("Select if you want the navbar submenu span the full container width."),
 *   defaultValue = 0,
 *   groups = {
 *     "components" = @Translation("Components"),
 *     "navbar" = @Translation("Navbar"),
 *   },
 * )
 */
class NavbarFullWidth extends SettingBase {}
