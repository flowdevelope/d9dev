<?php
/**
 * Created by PhpStorm.
 * User: Urban
 * Date: 12.3.2020
 */

namespace Drupal\twigfilters\TwigExtension;


class TwigHelper extends \Twig_Extension {
  public function getFilters()
  {
    return [ new \Twig_SimpleFilter('short', array($this, 'short')),
             new \Twig_SimpleFilter('protect', array($this, 'protect')),
             new \Twig_SimpleFilter('clean', array($this, 'clean')),
             new \Twig_SimpleFilter('link', array($this, 'link'))];
  }

  public function getName()
  {
    return 'twigfilters.twig_extension';
  }

  public static function short($string, $lenght = NULL)
  {
    $textLength = $lenght? $lenght : 400;
    $string = trim(strip_tags($string));
    if (strlen($string) > $textLength) {
      $kurztext = substr($string, 0, strrpos(substr($string, 0, $textLength), '.'));
      $kurztext .= ' ...';
    } else {
      $kurztext = $string;
    }
    return  $kurztext;
  }

  // only blank text with mail not link
  public static function protect($email)
  {

    $email = trim(strip_tags($email));

    $character_set = '+-.0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

    $key = str_shuffle($character_set); $cipher_text = ''; $id = 'e'.rand(1,999999999);

    for ($i=0;$i<strlen($email);$i+=1) $cipher_text.= $key[strpos($character_set,$email[$i])];

    $script = 'var a="'.$key.'";var b=a.split("").sort().join("");var c="'.$cipher_text.'";var d="";';

    $script.= 'for(var e=0;e<c.length;e++)d+=b.charAt(a.indexOf(c.charAt(e)));';

    $script.= 'document.getElementById("'.$id.'").innerHTML="<a href=\\"mailto:"+d+"\\">"+d+"</a>"';

    $script = "eval(\"".str_replace(array("\\",'"'),array("\\\\",'\"'), $script)."\")";

    $script = '<script type="text/javascript">/*<![CDATA[*/'.$script.'/*]]>*/</script>';

    return '<span id="'.$id.'">[javascript protected email address]</span>'.$script;

  }
  // use: {{ content.field_fieldname|render|clean|raw }}
  public static function clean($text) {
    $text = preg_replace('/<span.+class="(.+)">(.*?)<\/span>/', '$1', $text);
    $text = preg_replace('/<font>(.*?)<\/font>/', '$1', $text);
    $text = preg_replace('/font-family.+?;/', '', $text);
    $text = preg_replace('/font-size.+?;/', '', $text);
    $text = preg_replace('/color.+?;/', '', $text);
    return $text;
  }
  // include: {{ attach_library('core/drupal.dialog.ajax') }} in twig
  // you can use: |render|clean|link|raw
  public static function link($text) {
    $text = preg_replace('/<a class="popup" href="(.*?)">(.*?)<\/a>/', '<a class="use-ajax" data-dialog-type="modal" href="$1" data-dialog-options="{&quot;dialogClass&quot;: &quot;modalbox modal-lg&quot;}">$2</a>', $text);
    return $text;
  }
}
