<template>
  <b-modal
    v-model="value"
    :title="title"
    centered
    hide-footer
    size="xl"
    :modal-class="selectedMenu == 'photoDetail'? 'modal-gallery responsiveMode' : 'modal-gallery' "
    header-class="border-bottom-0"
    style="top:3rem;z-index: 99999"
    hide-header-close
    hide-header
    no-close-on-backdrop
    no-close-on-esc
  >
    <div>
      <div class="row px-2 px-md-0">
        <div class="col-md-12 gallery-header">
          <h3 class="d-none d-md-block">{{title}}</h3>
          <i @click="$emit('input', false)" ><b-icon scale="2" icon="x"></b-icon></i>
        </div>
      </div>
      <div class="row mt-0 mt-md-0" v-if="galleries.length">
        <div class="col-xl-12 d-md-block">
          <div class="container-slideshow">
            <button class="prev" @click.stop="onPrev()"><b-icon scale="0.8" icon="chevron-left"></b-icon></button>
            <img
              @click.stop="onNext()"
              :src="currentShow"
            />
            <button class="next" @click.stop="onNext()"><b-icon scale="0.8" icon="chevron-right"></b-icon></button>
          </div>
        </div>

        <div class="col-xl-12 mt-5 mt-xl-0 md-lg-0 mt-md-4">
          <div class="gallery-folder" ref="galleries">
            <div class="folder-images">
              <div class="folder-images__container">
                <span v-for="(img, iImg) in galleries" @click.stop="onClickThumb(iImg);">
                  <img
                    :class="{'active': iImg == galleryIndex}"
                    :src="img.images"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-else>
        <div class="alert alert-warning">
          No Gallery Found
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import Vue from 'vue';
import VueWindowSize from 'vue-window-size';
Vue.use(VueWindowSize);
  export default {
    name: "modal_gallery",
    props: ['value','title','active','galleries','selectGalleryIndex','index'],
    data() {
      return {
        galleryIndex: 0,
        thumbnailWidth: 80,
        galleryXPos: 0,
        FolderData: {
          name : null,
          length : null,
        },
        selectedMenu: 'folder'
      }
    },
    computed: {
      currentShow ()
      {
        const img = this.galleries[this.galleryIndex].images;

        if (typeof img === "string")
        {
          return img;
        }

        return img.url;
      },
    },
    watch: {
      index: function(val){
        this.onClickThumb(val);
      }
    },
    methods:
      {
        onPrev()
        {
          if (this.galleryIndex > 0)
          {
            this.galleryIndex--;
          }
          else
          {
            this.galleryIndex = this.galleries.length - 1;
          }
          this.updateThumbnails();
        },

        onNext()
        {
          if (this.galleryIndex < this.galleries.length - 1)
          {
            this.galleryIndex++;
          }
          else
          {
            this.galleryIndex = 0;
          }

          this.updateThumbnails();
        },

        onClickThumb(galleryIndex)
        {
          this.galleryIndex = galleryIndex;
          console.log(this.galleryIndex);
          this.updateThumbnails();
        },

        updateThumbnails()
        {
          if (!this.$refs.galleries)
            return;

          const galleryWidth = this.$refs.galleries.clientWidth;
          const currThumbsWidth = this.galleryIndex * this.thumbnailWidth;
          const maxThumbsWidth = this.galleries.length * this.thumbnailWidth;
          const centerPos = Math.floor(galleryWidth / (this.thumbnailWidth * 2)) * this.thumbnailWidth;

          if (maxThumbsWidth < galleryWidth)
            return;

          if (currThumbsWidth < centerPos)
          {
            this.galleryXPos = 0;
          }
          else if (currThumbsWidth > this.galleries[this.galleryIndex].images.length * this.thumbnailWidth - galleryWidth + centerPos)
          {
            this.galleryXPos = -(
              this.galleries[this.galleryIndex].images.length * this.thumbnailWidth -
              galleryWidth +
              25
            );
          }
          else
          {
            this.galleryXPos = -(this.galleryIndex * this.thumbnailWidth) + centerPos;
          }
        },
      },

    mounted ()
    {
      this.galleryIndex = this.selectGalleryIndex ? this.selectGalleryIndex : 0

      window.addEventListener("keydown", e =>
      {
        if (e.keyCode === 37)
          this.onPrev();
        else if (e.keyCode === 39)
          this.onNext();
        else if (e.keyCode === 27)
        {
          this.$emit('input', false)
          this.galleryIndex = 0
        }
      });
    }
  };
</script>
<style >
  .modal-gallery .modal-dialog {
    max-width: 100%;
    height: 100%;
    margin: 0;
  }
  .modal-gallery .modal-content {
    display: -webkit-box;
    width: 100%;
    min-height: 100%;
    height: 100%;
    background-color: transparent !important;
    border-color: transparent !important;
  }

  .modal-gallery .modal-body
  {
    margin: 50px 10% 50px 10%;
  }

  .modal-gallery .container-slideshow
  {
    height: 400px;
    overflow: hidden;
    border-radius: 20px;
  }

  .modal-gallery .container-slideshow img
  {
    height: 100%;
    width: 100%;
    cursor: pointer;
    object-fit: contain;
    transition: all 200ms ease-in-out;
  }

  .modal-gallery .container-slideshow .prev, .modal-gallery .container-slideshow .next
  {
    position: absolute;
    top: 50%;
    margin-top: -25px;
    width: 40px;
    height: 40px;
    z-index: 999;
    border: none;
    font-size: 24px;
    border-radius: 100%;
    line-height: 0;
    /*background: rgba(237, 243, 244, 0.5);*/
    background: rgba(237, 243, 244, 1);
    cursor: pointer;
    display: block;
    color: #10B382;
    font-family: cursive;
  }

  .modal-gallery .container-slideshow .prev
  {
    margin-left: 35px;
    left: 0;
  }

  .modal-gallery .container-slideshow .next
  {
    margin-right: 35px;
    right: 0;
  }

  @media screen and (max-width: 500px) {
    .modal-gallery {
      padding: 0 !important;
    }
    .modal-gallery .gallery-folder .folder__total-images {
      /* color: white; */
    }
    .modal-gallery .gallery-header {
      margin-bottom: 0 !important;
    }
    .modal-gallery .gallery-header i {
      right: 7% !important;
      top: -3px !important;
      font-size: 20px !important;
      /* color: white; */
    }
    .modal-gallery .gallery-header h3 {
      /* color: white; */
      font-size: 16px !important;
          width: 80%;
    }
    .modal-gallery.responsiveMode .modal-dialog {
      height: 100% !important;
      background: black;
    }
    .modal-gallery.responsiveMode .modal-content {
      background: black;

    }
    .modal-gallery.responsiveMode .gallery-header h3, .modal-gallery.responsiveMode .gallery-header h6, .modal-gallery.responsiveMode .gallery-header span, .modal-gallery.responsiveMode .gallery-header i {
      color: white;

    }
    .modal-gallery.responsiveMode .container-slideshow {
      width: 100%;
    }
    .modal-gallery .modal-body
    {
      margin: 0 !important;
      /* background: black !important; */
          padding-left: 0 !important;
    padding-right: 0 !important;
    }
    .modal-gallery .container-slideshow {
      height: auto !important;
      border-radius: 0 !important;
    }
    .modal-gallery .gallery-folder .folder__title, .modal-gallery .gallery-folder .folder__total-images {
      font-size: 14px !important;
    }
    .modal-gallery .gallery-folder .folder-images {
      /* background: black !important; */
      margin-top: 18px !important;
    }
    .modal-gallery .gallery-folder {
      margin-left: 15px !important;
    }
    .modal-gallery .gallery-folder .folder-images .folder-images__container img {
      opacity: 1 !important;
    }
  }

  .modal-gallery .gallery-header
  {
    margin-bottom: 50px;
  }

  .modal-gallery .gallery-header h3
  {
    color: #fff;
    font-family: MontSerrat-SemiBold;
    font-weight: 500;
    font-size: 21px;
  }

  .modal-gallery .gallery-header i
  {
    color: #fff;
    position: absolute;
    right: 0;
    top: -8px;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    font-family: cursive;
    font-style: normal;
  }

  .modal-gallery .gallery-folder
  {
    display: flex;
  }

  .modal-gallery .gallery-folder .folder__title
  {
    font-family: Rubik-Medium;
    font-weight: 500;
    font-size: 18px;
  }

  .modal-gallery .gallery-folder .folder__total-images
  {
    font-family: Rubik;
    font-weight: 500;
    font-size: 18px;
    position: absolute;
    right: 0;
  }

  .modal-gallery .gallery-folder .folder-images::-webkit-scrollbar {
    display: none;
  }

  .modal-gallery .gallery-folder .folder-images
  {
    margin-right: auto;
    margin-left: auto;
    margin-top: 30px;
    overflow: auto;
    white-space: nowrap;
    -ms-overflow-style: none;
    background-attachment: local, local, scroll, scroll;
  }

  .modal-gallery .gallery-folder .folder-images .folder-images__container
  {
    transition: all 200ms ease-in-out;
  }

  .modal-gallery .gallery-folder .folder-images .folder-images__container img
  {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 5px;
    border-radius: 10px;
    cursor: pointer;
    opacity: 0.4;
    object-position: center;
  }
  .modal-gallery .gallery-folder .folder-images .folder-images__container img.active
  {
    opacity: 1;
  }
</style>
